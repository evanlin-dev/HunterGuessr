import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css';
import floorPlan from '../assets/images/floorplan7.png';
import pinpointLocation from '../assets/images/PinpointLocation.png';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();

    const originalLocation = { x: 50, y: 50 };
    const [userLocation, setUserLocation] = useState({ x: null, y: null });
    const [score, setScore] = useState(0);
    const [isFloorplanVisible, setIsFloorplanVisible] = useState(true);

    const [buildings, setBuildings] = useState([]);
    const [floors, setFloors] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');

    const [usedImageIds, setUsedImageIds] = useState(new Set());

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setModalMessage('');
    };

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
        const distance = Math.sqrt(
            Math.pow(originalLocation.x - Xaxis, 2) +
            Math.pow(originalLocation.y - Yaxis, 2)
        );

        const maxScore = 100;
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

    const loadNewScene = () => {
        loadScene(`scene-${sceneId}`);
        setSceneId(prevId => prevId + 1);
    };

    const fetchRandomImage = async () => {
        try {
            if (usedImageIds.size >= 100) {
                showModal('Maximum number of images reached.');
                return;
            }

            const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/GrabImageForGuessing');
            const image = response.data;

            if (image && image.id && image.photo) {
                if (usedImageIds.has(image.id)) {
                    console.log('Image already used');
                    showModal("You've gone through all the images. Congratulations!");
                    return;
                }

                setSelectedImage(`data:image/jpeg;base64,${image.photo}`);
                setRandomImage(image);
                setUsedImageIds(prev => new Set(prev).add(image.id));

                const img = new Image();
                img.src = `data:image/jpeg;base64,${image.photo}`;
                img.onload = () => {
                    addScene(`scene-${sceneId}`, {
                        type: "equirectangular",
                        imageSource: `data:image/jpeg;base64,${image.photo}`,
                        haov: equirectangularOptions.haov,
                        vaov: equirectangularOptions.vaov,
                        ...config
                    }, loadNewScene);
                };
            } else {
                console.error('Invalid image data received:', image);
                showModal('Failed to load image. Please try again.');
            }
        } catch (error) {
            console.error('Error retrieving random image:', error);
            showModal('Error retrieving image. Please try again.');
        }
    };

    const fetchLocationData = () => {
        setBuildings(['West Building', 'North Building', 'East Building', 'Thomas Hunter']);
    };

    useEffect(() => {
        fetchRandomImage();
        fetchLocationData();
    }, []);

    useEffect(() => {
    }, [selectedImage]);

    useEffect(() => {
        if (selectedBuilding) {
            setFloors(['Floor 1', 'Floor 2', 'Floor 3']);
            setSelectedFloor('');
            setSelectedRoom('');
            setRooms([]);
        }
    }, [selectedBuilding]);

    useEffect(() => {
        if (selectedFloor) {
            setRooms(['Room 101', 'Room 102', 'Room 103']);
            setSelectedRoom('');
        }
    }, [selectedFloor]);

    const handleBuildingChange = (e) => {
        setSelectedBuilding(e.target.value);
    };

    const handleFloorChange = (e) => {
        setSelectedFloor(e.target.value);
    };

    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
    };

    const toggleFloorplan = () => {
        setIsFloorplanVisible(prevState => !prevState);
    };

    return (
        <div className='page-container'>
            <div className='scoreCounter'>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Round</h3>
                    <p className='scoreCounter_text'>1</p>
                </div>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Score</h3>
                    <p className='scoreCounter_text'>{score}</p>
                </div>
            </div>
            <ReactPannellum
                ref={pannellumRef}
                id="1"
                sceneId={`scene-${sceneId}`}
                style={{ width: "100%", height: "100%" }}
                imageSource={selectedImage}
                config={config}
                equirectangularOptions={equirectangularOptions}
            />

            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p style={{color: 'white'}}>{modalMessage}</p>
                        <button onClick={hideModal} className="modal-close-button">Close</button>
                    </div>
                </div>
            )}

            <div className='bottom-right-container'>
                <div className='dropdown-container'>
                    <div className='dropdowns'>
                        <select value={selectedBuilding} onChange={handleBuildingChange}>
                            <option value="" disabled>Select Building</option>
                            {buildings.map((building, index) => (
                                <option key={index} value={building}>{building}</option>
                            ))}
                        </select>

                        <select value={selectedFloor} onChange={handleFloorChange} disabled={!selectedBuilding}>
                            <option value="" disabled>Select Floor</option>
                            {floors.map((floor, index) => (
                                <option key={index} value={floor}>{floor}</option>
                            ))}
                        </select>

                        <select value={selectedRoom} onChange={handleRoomChange} disabled={!selectedFloor}>
                            <option value="" disabled>Select Room</option>
                            {rooms.map((room, index) => (
                                <option key={index} value={room}>{room}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='floorplan-container'>
                    {isFloorplanVisible && (
                        <div className='floorplan'>
                            <img
                                src={floorPlan}
                                alt="Floor Plan"
                                height="300px"
                                width="400px"
                                onClick={handleImageClick}
                                className='floorplan-image'
                            />
                            {userLocation.x !== null && (
                                <img
                                    src={pinpointLocation}
                                    alt="Pinpoint"
                                    className='pinpoint-marker'
                                    style={{
                                        left: `${userLocation.x}%`,
                                        top: `${userLocation.y}%`,
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <button className='toggleFloorplanButton' onClick={toggleFloorplan}>
                        {isFloorplanVisible ? 'Hide Floorplan' : 'Show Floorplan'}
                    </button>
                </div>

                <div className='next-img-container'>
                    <button
                        className='getRandomImageButton'
                        onClick={fetchRandomImage}
                        aria-label="Load the next random image"
                    >
                        Next Image
                    </button>
                </div>
            </div>
        </div>
    );

};

export default Pano;
