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
    const [score, setScore] = useState(100); // Initial score is 100
    const [round, setRound] = useState(0); // Initial round is 0
    const [isFloorplanVisible, setIsFloorplanVisible] = useState(true);

    const [guessBool, setGuessBool] = useState(false); // bool for score calculation, true if guess is correct, false if guess is wrong

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
        // save data for match hist - on next image click
        //saveData();
        setElapsedTime(0); // Reset time on new image
        incrementRound(); // Increment round on new image
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
    
            if (nodeId.includes('Floor')) {
                const [buildingName, floorName] = nodeId.split('-');
                buildingData[buildingName].rooms[floorName].forEach((room) => {
                    const roomId = `${nodeId}-${room}`;
                    newVisibleNodes.add(roomId);
                });
            } if (nodeId.includes('Buildings')) {
                Object.keys(buildingData).forEach((building) => {
                    newVisibleNodes.add(building);
                });
            } if (Object.keys(buildingData).includes(nodeId)) {
                buildingData[nodeId].floors.forEach((floor) => {
                    const floorId = `${nodeId}-${floor}`;
                    newVisibleNodes.add(floorId);
                });
            } if (nodeId.split('-').length === 3) {
                setSelectedRoom(nodeId);
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

    // Increment round funct, score carries over to next round based on guessBool
    const incrementRound = () => {
        // Increment round
        setRound(prevRound => prevRound + 1);
        // Reset score on new round
        if (guessBool) {
            setScore(prevScore => prevScore + 100);
        } else {
            setScore(prevScore => prevScore);
        }

        // Reset guessBool on new round
        setGuessBool(false);
    }

    // Guess is Wrong funct, TODO: Implement this
    const wrongGuess = () => {
        // Decrement score depending on how close the guess is, WRONG BUILDING: -50, WRONG FLOOR: -25, WRONG ROOM: -10
        if (selectedBuilding !== 'West Building') {
            setScore(prevScore => prevScore - 50);
            showModal('Incorrect Building');
        } else if (selectedFloor !== 'Floor 1') {
            setScore(prevScore => prevScore - 25);
            showModal('Incorrect Floor');
        } else if (selectedRoom !== 'West Room 101') {
            setScore(prevScore => prevScore - 10);
            showModal('Incorrect Room');
        }

        setGuessBool(false);
    }

    // Guess is Correct funct, TODO: Implement this
    const correctGuess = () => {
        // Increment score by 100
        setGuessBool(true);
        showModal('Correct Guess! Move on to the Next Image to recieve points!');
    }

    // Guess button click
    const guessClick = () => {
        // Check if all fields are selected
        if (selectedBuilding === '') {
            showModal('Please select a building, floor, and a room.');
            return;
        } else if (selectedFloor === '') {
            showModal('Select a floor, and a room.');
            return;
        } else if (selectedRoom === '') {
            showModal('SELECT A ROOM!');
            return;
        } else {
            // JUST PLACEHOLDER FOR NOW
            // Check if guess is correct
            if (selectedBuilding === 'West Building' && selectedFloor === 'Floor 1' && selectedRoom === 'W101') {
                correctGuess();
            } else if (selectedBuilding === 'West Building') {
                if (selectedFloor !== 'Floor 1') {
                    wrongGuess();
                } else if (selectedRoom !== 'W101') {
                    wrongGuess();
                }
            } else {
                wrongGuess();
            }
        }
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
    
        // Buildings
        if (visibleNodes.has('Buildings')) {
            nodes.push({ id: 'Buildings', label: 'Buildings', x: 600, y: levelYPositions[0] });
        }
    
        // Add Building Nodes
        Object.keys(buildingData).forEach((building, index) => {
            if (visibleNodes.has(building)) {
                const x = 300 + index * 200;
                nodes.push({ id: building, label: building, x, y: levelYPositions[1] });
                links.push({ source: 'Buildings', target: building });
            }
        });
    
        // Add Floor Nodes
        Object.keys(buildingData).forEach((building) => {
            const buildingNode = nodes.find((node) => node.id === building);
            buildingData[building].floors.forEach((floor, index) => {
                const floorId = `${building}-${floor}`;
                if (visibleNodes.has(floorId)) {
                    const x = buildingNode.x + index * 200 - (buildingData[building].floors.length - 1) * 100;
                    nodes.push({ id: floorId, label: floor, x, y: levelYPositions[2] });
                    links.push({ source: building, target: floorId });
                }
            });
        });
    
        // Add Room Nodes
        Object.keys(buildingData).forEach((building) => {
            buildingData[building].floors.forEach((floor) => {
                const floorId = `${building}-${floor}`;
                const floorNode = nodes.find((node) => node.id === floorId);
                buildingData[building].rooms[floor].forEach((room, index) => {
                    const roomId = `${floorId}-${room}`;
                    if (visibleNodes.has(roomId)) {
                        const x = floorNode.x + index * 150 - (buildingData[building].rooms[floor].length - 1) * 75;
                        nodes.push({ id: roomId, label: room, x, y: levelYPositions[3] });
                        links.push({ source: floorId, target: roomId });
                    }
                });
            });
        });
    
        return { nodes, links };
    };

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
                {/* <div className='dropdown-container'>
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
                </div> */}

                <div className='next-img-container'>
                    <button
                        className='getRandomImageButton'
                        onClick={fetchRandomImage}
                        aria-label="Load the next random image"
                    >
                        Next Image
                    </button>
                </div>
                <div className='next-img-container'>
                    <button
                        className='guess-img-container'
                        onClick={guessClick}
                        aria-label="Take a guess at the location?"
                    >
                        Guess?
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
