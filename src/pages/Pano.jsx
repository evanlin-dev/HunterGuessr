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

    const [elapsedTime, setElapsedTime] = useState(0); // State for elapsed time

    const originalLocation = { x: 50, y: 50 };
    const [userLocation, setUserLocation] = useState({ x: null, y: null });
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(-1);
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
        // save data for match hist - on next image click
        //saveData();
        setElapsedTime(0); // Reset time on new image
        incrementRound(); // Increment round on new image
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

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 1000); // Increment time every second

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    // Format time in HH:MM:SS
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(((totalSeconds % 3600) % 60));
        if (hours == 0) {
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    };

    const incrementRound = () => {
        // Increment round
        setScore(0); // Reset score on new round
        setRound(prevRound => prevRound + 1); // Increment round by 1)
    }

    // save data for match hist - on next image click
    /*const saveData = () => {
        const data = {
            id: rows.length + 1, // Increment ID for new row
            name: 'User', // Replace with actual username
            time: formatTime(elapsedTime), // Format time
            score: score, // Score from current round
        };
        addRow(data);
    };*/

    return (
        <div className='page-container'>
            <div className='scoreCounter'>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Round</h3>
                    <p className='scoreCounter_text'>{round}</p>
                </div>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Score</h3>
                    <p className='scoreCounter_text'>{score}</p>
                </div>
                <div className='score'>
                    <h3 className='scoreCounter_text'>Time</h3>
                    <p className='scoreCounter_text'>{formatTime(elapsedTime)}</p> {/* Display formatted time */}
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
