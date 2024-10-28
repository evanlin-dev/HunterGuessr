import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Leaderboard.css';

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
        <div className= "board-container">
            <h2>Leaderboard</h2>
            {/* Scrollable Table Container */}
            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Player 1</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Player 2</td>
                            <td>950</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Player 3</td>
                            <td>900</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Player 4</td>
                            <td>800</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Player 5</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Player 6</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Player 7</td>
                            <td>500</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <button type="main-page-button" onClick={() => navigate('/')}>Back to Main Page</button>
        </div>
    );
};

export default Leaderboard;
