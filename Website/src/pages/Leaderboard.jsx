import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch leaderboard data
        /*fetch('https://your-backend-url/api/leaderboard')
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.error("Error fetching data:", error));
            */
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <button type="main-page-button" onClick={() => navigate('/')}>Back to Main Page</button>
        </div>
    );
};

export default Leaderboard;
