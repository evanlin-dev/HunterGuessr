import React, { useState, useRef } from 'react';
import ReactPannellum, { addScene, getAllScenes, getConfig, loadScene } from "react-pannellum";

import sciencecenter from '../assets/images/sciencecenter.png';
import w215 from '../assets/images/w215.jpg';
import w217 from '../assets/images/w217.jpg';
import auditorium from '../assets/images/auditorium.jpg';
import w706 from '../assets/images/w706.jpg';
import w708 from '../assets/images/w708.jpg';
import w714 from '../assets/images/w714.jpg';
import w615 from '../assets/images/w615.jpg';
import w522 from '../assets/images/w522.jpg';
import w509 from '../assets/images/w509.jpg';
import w505 from '../assets/images/w505.jpg';
import w508 from '../assets/images/w508.jpg';
import w506 from '../assets/images/w506.jpg';
import w507 from '../assets/images/w507.jpg';
import hallway5 from '../assets/images/hallway5.jpg';
import studyarea5 from '../assets/images/studyarea5.jpg';
import w604 from '../assets/images/w604.jpg';
import w610 from '../assets/images/w610.jpg';
import w611 from '../assets/images/w611.jpg';
import hallway6 from '../assets/images/hallway6.jpg';
import studyarea6 from '../assets/images/studyarea6.jpg';
import studyarea7 from '../assets/images/studyarea7.jpg';
import hallway7 from '../assets/images/hallway7.jpg';
import skybridge7 from '../assets/images/skybridge7.jpg';
import cafe3 from '../assets/images/cafe3.jpg';
import studyarea3 from '../assets/images/studyarea3.jpg';
import skybridgeeast3 from '../assets/images/skybridgeeast3.jpg';
import skybridgenorth3 from '../assets/images/skybridgenorth3.jpg';
import w309 from '../assets/images/w309.jpg';
import hallway3 from '../assets/images/hallway3.jpg';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState(sciencecenter);
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

    const images = [
        { name: "Science Center", src: sciencecenter },
        { name: "W215", src: w215 },
        { name: "W217", src: w217 },
        { name: "Auditorium", src: auditorium },
        { name: "W706", src: w706 },
        { name: "W708", src: w708 },
        { name: "W714", src: w714 },
        { name: "W615", src: w615 },
        { name: "W522", src: w522 },
        { name: "W509", src: w509 },
        { name: "W505", src: w505 },
        { name: "W508", src: w508 },
        { name: "W506", src: w506 },
        { name: "W507", src: w507 },
        { name: "Hallway 5", src: hallway5 },
        { name: "Study Area 5", src: studyarea5 },
        { name: "W604", src: w604 },
        { name: "W610", src: w610 },
        { name: "W611", src: w611 },
        { name: "Hallway 6", src: hallway6 },
        { name: "Study Area 6", src: studyarea6 },
        { name: "Study Area 7", src: studyarea7 },
        { name: "Hallway 7", src: hallway7 },
        { name: "Skybridge 7", src: skybridge7 },
        { name: "Cafe 3", src: cafe3 },
        { name: "Study Area 3", src: studyarea3 },
        { name: "Skybridge East 3", src: skybridgeeast3 },
        { name: "Skybridge North 3", src: skybridgenorth3 },
        { name: "W309", src: w309 },
        { name: "Hallway 3", src: hallway3 },
    ];

    return (
        <div>
            <select onChange={handleImageChange} value={selectedImage}>
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
            <div onClick={click}>Click me</div>
        </div>
    );
};

export default Pano;
