import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, getConfig, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css'
import floorPlan from '../assets/images/floorplan7.png';
import pinpointLocation from '../assets/images/PinpointLocation.png';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [images, setImages] = useState([]);
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();

    const originalLocation = ({x:50, y: 50});
    // this will be extracted from database for now we will have this

    const [userLocation, setUserLocation] = useState({ x: null, y: null });
    const [score, setScore] = useState(0);

     const handleImageClick = (e) => {
    const imgElement = e.target;
   
    const canvas = imgElement.getBoundingClientRect();
    const Xaxis = e.clientX - canvas.left; 
    const Yaxis = e.clientY - canvas.top; 

    const clickPercentX = (Xaxis / imgElement.width) * 100;
    const clickPercentY = (Yaxis / imgElement.height) * 100;

    setUserLocation({ x: clickPercentX, y: clickPercentY });
    calculateScore(clickPercentX, clickPercentY);
  };

    const calculateScore = (Xaxis, Yaxis) => {
    //here i simply applied distance formula sqrt(a^2+b^2)
    const distance = Math.sqrt(
      Math.pow(originalLocation.x - Xaxis, 2) +
      Math.pow(originalLocation.y - Yaxis, 2)
    );

     const maxScore = 100; 
     //formula i used is (1- (distance/maxScore)) * 100 so user cannot get more than 100 points
     const points = Math.max(0, Math.floor((1 - distance / maxScore) * 100));

    setScore(points);
};

    const config = {
        autoLoad: true,
    };

    const equirectangularOptions = {
        haov: 360,
        vaov: 90,
    };

    const click = () => {
        console.log(getConfig());
    };

    const loadNewScene = () => {
        loadScene(`scene-${sceneId}`);
        setSceneId(sceneId + 1);
    }

    const handleImageChange = (event) => {
        const newSelectedImage = event.target.value;
        setSelectedImage(newSelectedImage);
    
        const img = new Image();
        img.src = newSelectedImage;
        img.onload = () => {
            addScene(`scene-${sceneId}`, {
                type: "equirectangular",
                imageSource: newSelectedImage,
                haov: equirectangularOptions.haov,
                vaov: equirectangularOptions.vaov,
                ...config
            }, loadNewScene);
        };
    };

    const fetchAllImages = async () => {
        try {
            const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_all_images');
            const imagesData = response.data.map(image => ({
                name: `Image ${image.id}`,
                src: `data:image/jpeg;base64,${image.photo}`
            }));
            setImages(imagesData);
        } catch (error) {
            console.error('Error retrieving all images:', error);
        }
    };

    const fetchRandomImage = async () => {
        try {
            const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/GrabImageForGuessing');
            const randomImageData = {
                name: `Random Image ${response.data.id}`,
                src: `data:image/jpeg;base64,${response.data.photo}`
            };
            setRandomImage(randomImageData);
            setSelectedImage(randomImageData.src);

            const img = new Image();
            img.src = randomImageData.src;
            img.onload = () => {
                addScene(`scene-${sceneId}`, {
                    type: "equirectangular",
                    imageSource: randomImageData.src,
                    haov: equirectangularOptions.haov,
                    vaov: equirectangularOptions.vaov,
                    ...config
                }, loadNewScene);
            };
        } catch (error) {
            console.error('Error retrieving random image:', error);
        }
    };

    useEffect(() => {
        fetchAllImages();
    }, []);

    return (
        <div>
            <div>
                {/* <button onClick={fetchAllImages}>Retrieve All Images</button> */}
                <button onClick={fetchRandomImage}>Get Random Image</button>
            </div>

            <div className='scoreCounter'>
                <div className='score'>
                    <h3>Round</h3>
                    <p className='scoreCounter_text'>1</p>
                {/* logic will be implemented */}

                </div>
                <div className='score'>
                    <h3>Score</h3>
                    <p className='scoreCounter_text'>{score}</p>
                    {/* logic to calculate score will be implemented once user input is set*/}
                </div>
            </div>

            <select onChange={handleImageChange} value={selectedImage}>
                <option value="" disabled>Select an image</option>
                {images.map((image) => (
                    <option key={image.src} value={image.src}>
                        {image.name}
                    </option>
                ))}
            </select>

            <ReactPannellum
                ref={pannellumRef}
                id="1"
                sceneId={`scene-${sceneId}`}
                style={{ width: "80vw", height: "80vh" }}
                imageSource={selectedImage}
                config={config}
                equirectangularOptions={equirectangularOptions}
            />
            <div className='floorplan'>
            <img src={floorPlan} alt="Floor Plan" height="300px" width="400px" onClick={handleImageClick}/>
            {/* logic to pull floorplan will be implemented later on*/}
            {userLocation.x !== null && (
                    <img
                        src={pinpointLocation}
                        alt="Pinpoint"
                        style={{
                            position: 'absolute',
                            top: `${userLocation.y}%`,
                            left: `${userLocation.x}%`,
                            transform: 'translate(-50%, -100%)', // Center the icon on the click
                            width: '30px', // Size of pinpoint icon
                            height: '30px',
                            pointerEvents: 'none', // Ensure the icon doesn't block further clicks
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Pano;
