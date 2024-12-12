import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';

const Leaderboard = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [leaderboardData, setLeaderboardData] = useState([]);
    const navigate = useNavigate();

    const columns = [
        {
            field: 'id',
            headerName: 'Rank',
            width: 100,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'username',
            headerName: 'User',
            width: 200,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'score',
            headerName: 'Score',
            width: 150,
            headerAlign: 'center',
            align: 'center',
            type: 'number',
        }
    ];

    useEffect(() => {
        const fetchLeaderboardData = async () => {
            try {
                const response = await axios.get('https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_all_scores', {
                    timeout: 5000,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.data) {
                    throw new Error('No data received from server');
                }

                const sortedData = response.data
                    .filter(item => item && typeof item.score === 'number')
                    .sort((a, b) => b.score - a.score)
                    .map((item, index) => ({
                        ...item,
                        id: index + 1
                    }));

                setLeaderboardData(sortedData);
                setError(null);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
                setError('Unable to load leaderboard data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboardData();
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto mt-20 px-4">
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingAnimation />
                </div>
            ) : error ? (
                <div className="text-center py-8">
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Retry
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Leaderboard</h2>
                    <div className="tablebox">
                        <DataGrid
                        
                            rows={leaderboardData}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10,
                                    },
                                },
                            }}
                            sx={{
                                '& .MuiDataGrid-root': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-row:nth-of-type(even)': {
                                    backgroundColor: '#f2f2f2',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-row:nth-of-type(odd)': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: 'white',
                                    color: 'white',
                                },
                            }}
                            pageSizeOptions={[10]}
                            disableSelectionOnClick
                            disableColumnSelector
                            className="border-none"
                            sx={{
                                '& .MuiDataGrid-root': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-row:nth-of-type(even)': {
                                    backgroundColor: '#f2f2f2',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-row:nth-of-type(odd)': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: 'white',
                                    color: 'white',
                                },
                            }}
                        />
                    </div>
                    <div className="text-center mt-6">
                        <button
                            onClick={() => navigate('/')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-200"
                        >
                            Back to Main Page
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leaderboard;