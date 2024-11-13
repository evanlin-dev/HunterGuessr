import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css';
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
        setElapsedTime(0); // Reset time on new image
    };

    const buildingData = {
        'West Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['W101', 'W102', 'W103'],
                'Floor 2': ['W201', 'W202', 'W203'],
                'Floor 3': ['W301', 'W302', 'W303'],
            }
        },
        'North Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['N101', 'N102', 'N103'],
                'Floor 2': ['N201', 'N202', 'N203'],
                'Floor 3': ['N301', 'N302', 'N303'],
            }
        },
        'East Building': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['E101', 'E102', 'E103'],
                'Floor 2': ['E201', 'E202', 'E203'],
                'Floor 3': ['E301', 'E302', 'E303'],
            }
        },
        'Thomas Hunter': {
            floors: ['Floor 1', 'Floor 2', 'Floor 3'],
            rooms: {
                'Floor 1': ['T101', 'T102', 'T103'],
                'Floor 2': ['T201', 'T202', 'T203'],
                'Floor 3': ['T301', 'T302', 'T303'],
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

    const toggleGraphModal = () => {
        setIsGraphModalVisible(prev => !prev);
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            setIsGraphModalVisible(false);
        }
    };

    const handleNodeClick = (nodeId) => {
        setVisibleNodes((prevVisibleNodes) => {
            const newVisibleNodes = new Set(prevVisibleNodes);
    
            if (nodeId.includes('Room')) {
                setSelectedRoom(nodeId);
            } else {
                const isExpanded = Array.from(newVisibleNodes).some((n) => n.startsWith(`${nodeId}-`));
                if (isExpanded) {
                    const nodesToRemove = Array.from(newVisibleNodes).filter((n) =>
                        n.startsWith(`${nodeId}-`)
                    );
                    nodesToRemove.forEach((n) => newVisibleNodes.delete(n));
                } else {
                    if (nodeId === 'Buildings') {
                        Object.keys(buildingData).forEach((building) => {
                            newVisibleNodes.add(building);
                        });
                    } else if (Object.keys(buildingData).includes(nodeId)) {
                        buildingData[nodeId].floors.forEach((floor) => {
                            const floorId = `${nodeId}-${floor}`;
                            newVisibleNodes.add(floorId);
                        });
                    } else if (nodeId.includes('Floor')) {
                        const [buildingName, floorName] = nodeId.split('-');
                        buildingData[buildingName].rooms[floorName].forEach((room) => {
                            const roomId = `${nodeId}-${room}`;
                            newVisibleNodes.add(roomId);
                        });
                    }
                }
            }
    
            return newVisibleNodes;
        });
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
            size: 5000,
            fontColor: 'white',
            fontSize: 12,
            fontWeight: 'bold',
            labelProperty: 'label',
            renderLabel: true,
            labelPosition: 'center',
            wrapLabel: true,
            nodeSvgShape: {
                shape: 'ellipse',
                shapeProps: {
                    rx: 120,
                    ry: 40,
                    fill: '#60269e',
                    stroke: '#60269e',
                },
            },
        },
        link: {
            highlightColor: 'lightblue',
            strokeWidth: 2,
        },
        directed: true,
        height: 700,
        width: 1200,
        panAndZoom: true,
        staticGraph: false,
        maxZoom: 2,
        minZoom: 0.1,
        d3: {
            alphaTarget: 0.05,
            gravity: -200,
            linkLength: 200,
            disableLinkForce: true,
        },
    };

    const generateGraphData = () => {
        const nodes = [];
        const links = [];
        const levelYPositions = { 0: 100, 1: 250, 2: 450, 3: 550 };
        const levelNodes = {};
    
        // Level 0: Buildings
        if (visibleNodes.has('Buildings')) {
            levelNodes[0] = [{ id: 'Buildings', label: 'Buildings', x: 600, y: levelYPositions[0] }];
            nodes.push({ id: 'Buildings', label: 'Buildings', x: 600, y: levelYPositions[0] });
        } else {
            levelNodes[0] = [];
        }
    
        // Level 1: Buildings
        levelNodes[1] = [];
        Object.keys(buildingData).forEach((building, index) => {
            if (visibleNodes.has(building)) {
                const x = 300 + index * 200;
                nodes.push({ id: building, label: building, x, y: levelYPositions[1] });
                links.push({ source: 'Buildings', target: building });
                levelNodes[1].push({ id: building, x });
            }
        });
    
        // Level 2: Floors
        levelNodes[2] = [];
        Object.keys(buildingData).forEach((building) => {
            if (visibleNodes.has(building)) {
                const floors = buildingData[building].floors;
                const parentNode = levelNodes[1].find(node => node.id === building);
                floors.forEach((floor, floorIndex) => {
                    const nodeId = `${building}-${floor}`;
                    if (visibleNodes.has(nodeId)) {
                        const x = parentNode.x + floorIndex * 200 - (floors.length - 1) * 100;
                        nodes.push({
                            id: nodeId,
                            label: floor,
                            x,
                            y: levelYPositions[2]
                        });
                        links.push({ source: building, target: nodeId });
                        levelNodes[2].push({ id: nodeId, x });
                    }
                });
            }
        });
    
        // Level 3: Rooms
        Object.keys(buildingData).forEach((building) => {
            buildingData[building].floors.forEach((floor) => {
                const floorNodeId = `${building}-${floor}`;
                if (visibleNodes.has(floorNodeId)) {
                    const rooms = buildingData[building].rooms[floor];
                    const parentNode = levelNodes[2].find(node => node.id === floorNodeId);
                    rooms.forEach((room, roomIndex) => {
                        const roomNodeId = `${floorNodeId}-${room}`;
                        if (visibleNodes.has(roomNodeId)) {
                            const x = parentNode.x + roomIndex * 150 - (rooms.length - 1) * 75;
                            nodes.push({
                                id: roomNodeId,
                                label: room,
                                x,
                                y: levelYPositions[3]
                            });
                            links.push({ source: floorNodeId, target: roomNodeId });
                        }
                    });
                }
            });
        });
    
        return { nodes, links };
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
                        <div className="modal-overlay" onClick={closeModal} style={{}}>
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
