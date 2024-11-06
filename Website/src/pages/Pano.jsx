import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css';
import floorPlan from '../assets/images/floorplan7.png';
import pinpointLocation from '../assets/images/PinpointLocation.png';
import { Graph } from 'react-d3-graph';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();

    const [elapsedTime, setElapsedTime] = useState(0);
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

    const [isGraphModalVisible, setIsGraphModalVisible] = useState(false);
    const [graphData, setGraphData] = useState(null);
    const [visibleNodes, setVisibleNodes] = useState(new Set(['Buildings']));

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

    const buildingData = {
        'West Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['West Room 101', 'West Room 102', 'West Room 103'],
                'Floor 2': ['West Room 201', 'West Room 202', 'West Room 203'],
                'Floor 3': ['West Room 301', 'West Room 302', 'West Room 303'],
            }
        },
        'North Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['North Room 101', 'North Room 102', 'North Room 103'],
                'Floor 2': ['North Room 201', 'North Room 202', 'North Room 203'],
                'Floor 3': ['North Room 301', 'North Room 302', 'North Room 303'],
            }
        },
        'East Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['East Room 101', 'East Room 102', 'East Room 103'],
                'Floor 2': ['East Room 201', 'East Room 202', 'East Room 203'],
                'Floor 3': ['East Room 301', 'East Room 302', 'East Room 303'],
            }
        },
        'Thomas Hunter': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['Hunter Room 101', 'Hunter Room 102', 'Hunter Room 103'],
                'Floor 2': ['Hunter Room 201', 'Hunter Room 202', 'Hunter Room 203'],
                'Floor 3': ['Hunter Room 301', 'Hunter Room 302', 'Hunter Room 303'],
            }
        }
    };

    useEffect(() => {
        fetchRandomImage();
        setBuildings(Object.keys(buildingData));
    }, []);

    useEffect(() => {
        if (selectedBuilding) {
            setFloors(buildingData[selectedBuilding].floors);
            setSelectedFloor('');
            setRooms([]);
            setSelectedRoom('');
        } else {
            setFloors([]);
            setSelectedFloor('');
            setRooms([]);
            setSelectedRoom('');
        }
    }, [selectedBuilding]);

    useEffect(() => {
        if (selectedFloor && selectedBuilding) {
            setRooms(buildingData[selectedBuilding].rooms[selectedFloor]);
            setSelectedRoom('');
        } else {
            setRooms([]);
        }
    }, [selectedFloor, selectedBuilding]);

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
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(((totalSeconds % 3600) % 60));
        return hours === 0
            ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (isGraphModalVisible) {
            setGraphData(generateGraphData());
        }
    }, [isGraphModalVisible, visibleNodes]);

    const generateGraphData = () => {
        const nodes = [
            { id: 'Buildings', symbolType: 'circle' },
            ...Object.keys(buildingData)
                .filter(building => visibleNodes.has('Buildings'))
                .map(building => ({ id: building })),
            ...Object.keys(buildingData).flatMap(building =>
                buildingData[building].floors
                    .filter(floor => visibleNodes.has(building))
                    .map(floor => ({ id: `${building}-${floor}` }))
            ),
            ...Object.keys(buildingData).flatMap(building =>
                buildingData[building].floors.flatMap(floor =>
                    buildingData[building].rooms[floor]
                        .filter(room => visibleNodes.has(`${building}-${floor}`))
                        .map(room => ({ id: `${building}-${floor}-${room}` }))
                )
            ),
        ];

        const links = [
            ...Object.keys(buildingData)
                .filter(building => visibleNodes.has('Buildings'))
                .map(building => ({ source: 'Buildings', target: building })),
            ...Object.keys(buildingData).flatMap(building =>
                buildingData[building].floors
                    .filter(floor => visibleNodes.has(building))
                    .map(floor => ({ source: building, target: `${building}-${floor}` }))
            ),
            ...Object.keys(buildingData).flatMap(building =>
                buildingData[building].floors.flatMap(floor =>
                    buildingData[building].rooms[floor]
                        .filter(room => visibleNodes.has(`${building}-${floor}`))
                        .map(room => ({
                            source: `${building}-${floor}`,
                            target: `${building}-${floor}-${room}`
                        }))
                )
            ),
        ];

        return { nodes, links };
    };

    const toggleGraphModal = () => {
        setIsGraphModalVisible(prev => !prev);
    };

    const closeModal = (e) => {
        if (e.target.className === "modal-overlay") {
            setIsGraphModalVisible(false);
        }
    };

    const handleNodeClick = (nodeId) => {
        setVisibleNodes(prevVisibleNodes => {
            const newVisibleNodes = new Set(prevVisibleNodes);
            if (newVisibleNodes.has(nodeId)) {
                newVisibleNodes.delete(nodeId);
            } else {
                newVisibleNodes.add(nodeId);
            }
            return newVisibleNodes;
        });

        if (nodeId.includes('Room')) {
            setSelectedRoom(nodeId);
        }
    };

    const submitSelection = () => {
        if (selectedRoom) {
            alert(`Room "${selectedRoom}" selected!`);
            setIsGraphModalVisible(false);
        } else {
            alert("No room selected!");
        }
    };

    const graphConfig = {
        node: {
            color: '#60269e',
            size: 300,
            fontColor: 'white',
            fontSize: 12,
            labelProperty: 'id',
        },
        link: { highlightColor: 'lightblue' },
        directed: true,
        height: 700,
        width: 1000,
        panAndZoom: true,
        staticGraph: false,
        d3: {
            gravity: -300,
            linkLength: 250,
            alphaTarget: 0,
        },
        maxZoom: 2,
        minZoom: 0.5,
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
                <div className='score'>
                    <h3 className='scoreCounter_text'>Time</h3>
                    <p className='scoreCounter_text'>{formatTime(elapsedTime)}</p>
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
                        <p style={{ color: 'white' }}>{modalMessage}</p>
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

                <div className='next-img-container'>
                    <button
                        className='getRandomImageButton'
                        onClick={fetchRandomImage}
                        aria-label="Load the next random image"
                    >
                        Next Image
                    </button>
                </div>
                <div>
                    <div style={{
                        backgroundColor: 'rgba(217, 217, 217, 1)',
                        borderRadius: '10px',
                        padding: '10px',
                        marginTop: '10px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button onClick={toggleGraphModal} className="openGraphButton">
                            Open Building Map
                        </button>
                    </div>

                    {isGraphModalVisible && (
                        <div className="modal-overlay" onClick={closeModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="modal-content" style={{
                                width: '80%',
                                maxHeight: '80%',
                                backgroundColor: '#333',
                                padding: '20px',
                                overflowY: 'auto',
                                position: 'relative',
                            }}>
                                <button onClick={toggleGraphModal} className="modal-close-button" style={{
                                    position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '20px', background: 'transparent', border: 'none', cursor: 'pointer'
                                }}>
                                    &times;
                                </button>
                                {graphData && (
                                    <Graph
                                        id="buildingGraph"
                                        data={graphData}
                                        config={graphConfig}
                                        onClickNode={handleNodeClick}
                                    />
                                )}
                                {selectedRoom && (
                                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                        <p style={{ color: 'white' }}>Selected Room: {selectedRoom}</p>
                                        <button style={{
                                            backgroundColor: '#60269e', padding: '8px 12px',
                                            fontSize: '0.9rem', borderRadius: '5px',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s',
                                            width: '9.5em'
                                        }} onClick={submitSelection}>Submit Selection</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Pano;
