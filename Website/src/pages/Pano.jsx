import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, getConfig, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css'
import floorPlan from '../assets/images/floorplan7.png';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [images, setImages] = useState([]);
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();

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

            <div className='scoreboard'>
                <div className='score'>
                    <h3>Round</h3>
                    <p className='scoreboard_text'>1</p>
                {/* logic will be implemented */}

                </div>
                <div className='score'>
                    <h3>Score</h3>
                    <p className='scoreboard_text'>540</p>
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
            <img src={floorPlan} alt="Floor Plan" height="300px" width="400px" />
            {/* logic to pull floorplan will be implemented later on*/}
            </div>
        </div>
    );
};

export default Pano;
