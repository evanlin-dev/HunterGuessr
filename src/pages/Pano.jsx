import React, { useState, useEffect, useRef } from 'react';
import ReactPannellum, { addScene, loadScene } from "react-pannellum";
import axios from 'axios';
import './Pano.css';
import { Graph } from 'react-d3-graph';
import { Flip } from '@mui/icons-material';

const Pano = () => {
    const [sceneId, setSceneId] = useState(0);
    const [selectedImage, setSelectedImage] = useState('');
    const [randomImage, setRandomImage] = useState(null);
    const pannellumRef = useRef();
    const [guessingEnabled, setGuessingEnabled] = useState(true);
    const [selectedNode, setSelectedNode] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const originalLocation = { x: 50, y: 50 };
    const [userLocation, setUserLocation] = useState({ x: null, y: null });
    const [score, setScore] = useState(100); // Initial score is 100
    const [round, setRound] = useState(0); // Initial round is 0
    const [isFloorplanVisible, setIsFloorplanVisible] = useState(true);
    const [selectedLocationBuilding, setSelectedLocationBuilding] = useState(null);
    const [selectedLocationFloor, setSelectedLocationFloor] = useState(null);
    const [selectedLocationRoom, setSelectedLocationRoom] = useState(null);



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
            const res2 = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/AmountOfImages');
            var total = res2.data.count;
            if (usedImageIds.size >= total) {
                showModal('Congrats you have completed the game! Please refresh the page to play again.');
                return;
            }

            
            const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/GrabImageForGuessing');
            const image = response.data;
            console.log(total);
    
            if (image && image.id && image.photo && image.file_name) {
                if (usedImageIds.has(image.id)) {
                    console.log('Image already used');
                    return fetchRandomImage();
                }
    
                // Parse building and floor from file name
                const fileNameParts = image.file_name.split('_'); // Split by underscores
                const building = fileNameParts[0]; // First part is the building
                const floor = fileNameParts[1];    // Second part is the floor
                const room = fileNameParts.slice(2).join('_').replace('.jpg', ''); // Combine remaining parts for room
    
                console.log(`Building: ${building}, Floor: ${floor}, Room: ${room}`);
    
                setSelectedImage(`data:image/jpeg;base64,${image.photo}`);
                setRandomImage({ ...image, building, floor, room }); // Include parsed info in the image state
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
        incrementRound(); // Increment round on new image
    };

    const buildingData = {
        "east": {
            floors: ["1", "4", "5", "6", "7"],
            rooms: {
                "1": ["hallway1", "hallway2"],
                "4": ["room402"],
                "5": ["mainarea"],
                "6": ["lockers", "mainarea", "outletarea", "room620A", "room620B"],
                "7": ["entrance", "mainarea", "sciencecenter", "writingcenter"]
            }
        },
        "north": {
            floors: ["1", "2", "3", "4", "5", "6", "7", "8", "10"],
            rooms: {
                "1": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6", "hallway7"],
                "2": ["auditorium", "auditorium2", "hallway1", "hallway2", "hallway3", "hallway4", "hallway5"],
                "3": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "4": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "5": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "6": ["hallway1", "hallway2", "hallway3", "hallway4", "hallway5", "hallway6"],
                "7": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "8": ["hallway1", "hallway2", "hallway3", "hallway4"],
                "10": ["hallway1", "hallway2", "hallway3"]
            }
        },
        "thomashunter": {
            floors: ["1", "2", "3", "4", "5"],
            rooms: {
                "1": ["hallway", "staircase", "staircase2"],
                "2": ["hallway1", "hallway2", "hallway3"],
                "3": ["hallway1", "hallway2", "hallway3"],
                "4": ["hallway"],
                "5": ["hallway1", "hallway2"]
            }
        },
        "west": {
            floors: ["2", "3", "5", "6", "7"],
            rooms: {
                "2": ["215", "w217"],
                "3": ["cafe3", "hallway3", "skybridgeeast3", "skybridgenorth3", "studyarea3", "w309"],
                "5": ["hallway5", "studyarea5", "w505", "w506", "w507", "w508", "w509", "w522"],
                "6": ["hallway6", "studyarea6", "w604", "w610", "w611", "w615"],
                "7": ["hallway7", "skybridge7", "studyarea7", "w706", "w708", "w714"]
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
        if (!nodeId) return;
        
        const [building, floor, room] = nodeId.split('-');
        
        // Store selected location when a room is clicked
        if (room) {
            setSelectedLocationBuilding(building);
            setSelectedLocationFloor(floor);
            setSelectedLocationRoom(room);
            setSelectedNode(nodeId);
        }
        
        setVisibleNodes(prev => {
            const newNodes = new Set(prev);
            
            // Root "Buildings" node handling
            if (nodeId === "Buildings") {
                if (Object.keys(buildingData).some(b => newNodes.has(b))) {
                    return new Set(['Buildings']); // Collapse all
                } else {
                    Object.keys(buildingData).forEach(b => newNodes.add(b)); // Expand all
                    return newNodes;
                }
            }
            
            // Building node handling
            if (buildingData[nodeId]) {
                const floors = buildingData[nodeId].floors;
                const hasVisibleFloors = floors.some(f => newNodes.has(`${nodeId}-${f}`));
                
                floors.forEach(f => {
                    const floorId = `${nodeId}-${f}`;
                    if (hasVisibleFloors) {
                        // Collapse: remove floor and its rooms
                        newNodes.delete(floorId);
                        buildingData[nodeId].rooms[f]?.forEach(r => {
                            newNodes.delete(`${floorId}-${r}`);
                        });
                    } else {
                        // Expand: show floor
                        newNodes.add(floorId);
                    }
                });
                return newNodes;
            }
            
            // Floor node handling
            if (floor && !room) {
                const rooms = buildingData[building].rooms[floor] || [];
                const hasVisibleRooms = rooms.some(r => newNodes.has(`${nodeId}-${r}`));
                
                rooms.forEach(r => {
                    const roomId = `${nodeId}-${r}`;
                    if (hasVisibleRooms) {
                        newNodes.delete(roomId); // Collapse: remove rooms
                    } else {
                        newNodes.add(roomId); // Expand: show rooms
                    }
                });
                return newNodes;
            }
            
            return newNodes;
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
        if (!randomImage || !selectedLocationRoom) {
            showModal('Please select a specific room first');
            return;
        }
        
        const correctBuilding = randomImage.building;
        const correctFloor = randomImage.floor;
        const correctRoom = randomImage.room;
        
        let earnedPoints = 0;
        let message = '';
        
        // Calculate points for correct building (33 points)
        if (selectedLocationBuilding === correctBuilding) {
            earnedPoints += 33;
            message += 'Building: Correct! (+33 points)\n';
        } else {
            message += 'Building: Incorrect\n';
        }
        
        // Calculate points for correct floor (33 points)
        if (selectedLocationFloor === correctFloor) {
            earnedPoints += 33;
            message += 'Floor: Correct! (+33 points)\n';
        } else {
            message += 'Floor: Incorrect\n';
        }
        
        // Calculate points for correct room (34 points)
        if (selectedLocationRoom === correctRoom) {
            earnedPoints += 34;
            message += 'Room: Correct! (+34 points)';
        } else {
            message += 'Room: Incorrect';
        }
        
        // Update score and show results
        setScore(prevScore => prevScore + earnedPoints);
        showModal(`${message}\n\nTotal points earned: ${earnedPoints}`);
        fetchRandomImage();
        if (earnedPoints === 100) {
            setGuessingEnabled(false);
        }
    };
    

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
        directed: true,
        nodeHighlightBehavior: true,
        maxZoom: 1.5,
        minZoom: 0.5,
        panAndZoom: false,
        staticGraph: true,
        height: 800,
        width: 1400,
        node: {
            color: "#0EA5E9",
            size: 800,
            highlightStrokeColor: "#8B5CF6",
            highlightFontSize: 16,
            highlightFontWeight: "bold",
            labelPosition: "center",
            labelProperty: "label",
            fontSize: 15,
            renderLabel: true,
            symbolType: "circle",
            strokeWidth: 3,
            strokeColor: "rgba(255, 255, 255, 0.1)",
            fontColor: "rgba(255, 255, 255, 0.9)",
            highlightColor: "#8B5CF6",
            highlightStrokeWidth: 4
        },
        link: {
            color: "rgba(255, 255, 255, 0.1)",
            strokeWidth: 2,
            highlightColor: "rgba(139, 92, 246, 0.5)",
            type: "STRAIGHT",
            semanticStrokeWidth: false,
            renderLabel: false
        }
    };
    
    const generateGraphData = () => {
        const nodes = [];
        const links = [];
        
        const centerX = 700;
        const centerY = 330;
        const buildingRadius = 100;
        const floorRadius = 130;
        const roomRadius = 100;
        
        // Root node
        nodes.push({
            id: "Buildings",
            label: "Buildings",
            x: centerX,
            y: centerY,
            fx: centerX,
            fy: centerY
        });
        
        const buildings = Object.keys(buildingData);
        const buildingAngleStep = (2 * Math.PI) / buildings.length;
        
        buildings.forEach((building, index) => {
            const buildingAngle = buildingAngleStep * index - Math.PI / 2;
            const buildingX = centerX + buildingRadius * Math.cos(buildingAngle);
            const buildingY = centerY + buildingRadius * Math.sin(buildingAngle);
            
            nodes.push({
                id: building,
                label: building,
                x: buildingX,
                y: buildingY,
                fx: buildingX,
                fy: buildingY
            });
            links.push({ source: "Buildings", target: building });
            
            if (visibleNodes.has(building)) {
                const floors = buildingData[building].floors;
                const floorAngleStep = Math.PI / (floors.length + 1);
                
                floors.forEach((floor, floorIndex) => {
                    const floorId = `${building}-${floor}`;
                    if (visibleNodes.has(floorId)) {
                        const floorAngle = buildingAngle - Math.PI/4 + floorAngleStep * (floorIndex + 1);
                        const floorX = buildingX + floorRadius * Math.cos(floorAngle);
                        const floorY = buildingY + floorRadius * Math.sin(floorAngle);
                        
                        nodes.push({
                            id: floorId,
                            label: `Floor ${floor}`,
                            x: floorX,
                            y: floorY,
                            fx: floorX,
                            fy: floorY
                        });
                        links.push({ source: building, target: floorId });
                        
                        const rooms = buildingData[building].rooms[floor] || [];
                        const visibleRooms = rooms.filter(r => visibleNodes.has(`${floorId}-${r}`));
                        const roomAngleStep = Math.PI / (visibleRooms.length + 1);
                        
                        visibleRooms.forEach((room, roomIndex) => {
                            if(building != 'east') {
                            const roomId = `${floorId}-${room}`;
                            const roomAngle = floorAngle - Math.PI/6 + roomAngleStep * (roomIndex + 1);
                            const roomX = floorX + roomRadius * Math.cos(roomAngle);
                            const roomY = floorY + roomRadius * Math.sin(roomAngle);
                            
                            nodes.push({
                                id: roomId,
                                label: room,
                                x: roomX,
                                y: roomY,
                                fx: roomX,
                                fy: roomY
                            });
                            links.push({ source: floorId, target: roomId });
                        }
                        else{
                            const roomId = `${floorId}-${room}`;
                            const roomAngle = floorAngle - Math.PI/6 + roomAngleStep * (roomIndex + 1);
                            const roomX = floorX + roomRadius * Math.sin(roomAngle) + 60;
                            const roomY = floorY + roomRadius * Math.cos(roomAngle) + 30;
                            
                            nodes.push({
                                id: roomId,
                                label: room,
                                x: roomX,
                                y: roomY,
                                fx: roomX,
                                fy: roomY
                            });
                            links.push({ source: floorId, target: roomId });
                        }
                        });
                    }
                });
            }
        });
        
        return { nodes, links };
    };
    
    
    // Update the useEffect hook
    useEffect(() => {
        if (isGraphModalVisible) {
            const data = generateGraphData();
            setGraphData(data);
        }
    }, [isGraphModalVisible, visibleNodes]);
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
    style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        position: "relative",
    }}
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
                    <div>
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
                                    position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '20px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: '10001'
                                }}>
                                    &times;
                                </button>
                                {graphData && (
                                     <div className="graph-container">
                                     <Graph
                                         id="buildingGraph"
                                         data={graphData}
                                         config={graphConfig}
                                         onClickNode={handleNodeClick}
                                     />
                                 </div>
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
