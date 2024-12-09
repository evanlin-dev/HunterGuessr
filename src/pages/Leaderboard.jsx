import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Leaderboard.css';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation';

const columns = [
    {
        field: 'id',
        headerName: 'Place',
        width: 90
    },
    {
        field: 'username',
        headerName: 'User',
        headerAlign: 'center',
        width: 150,
        editable: false,
    },
    {
        field: 'time',
        headerName: 'Time',
        headerAlign: 'center',
        width: 150,
        editable: false,
    },
    {
        field: 'score',
        headerName: 'Score',
        type: 'number',
        width: 110,
        editable: false,
    },
];

// Sample data, DELETE AND ADD LOGIC WHEN DB IS CONNECTED
const rows = [
    { id: 1, time: '1:00', username: 'James Baxter', score: 50 },
    { id: 2, time: '1:30', username: 'Dante', score: 88 },
    { id: 3, time: '1:31', username: 'Vergil', score: 30 },
    { id: 4, time: '2:30', username: 'Pops', score: 42 },
    { id: 5, time: '2:44', username: 'Bravo', score: 24 },
    { id: 6, time: '2:50', username: 'Smokey', score: 22 },
    { id: 7, time: '3:00', username: 'Giorno', score: 20 },
    { id: 8, time: '3:21', username: 'Benji', score: 71 },
    { id: 9, time: '99:99:99', username: 'Yamcha', score: 1 },
];

// Sort rows by highest score and set their 'id' to their place in the leaderboard
const sortRows = (rows) => {
    const sortedRows = rows.sort((a, b) => b.score - a.score);
    return sortedRows.map((row, index) => ({ ...row, id: index + 1 }));
};

const Leaderboard = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div style={{ marginTop: '5em' }}>
            {loading ? (
                // Display Loading Animation while loading is true
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <LoadingAnimation />
                </div>
            ) : (
                // Display Leaderboard content when loading is false
                <>
                    <h2>Leaderboard</h2>
                    <div className="data-table">
                        <DataGrid
                            rows={sortRows(rows)}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableSelectionOnClick
                            disableColumnSelector
                            disableCellFocusOutline
                            sx={{
                                backgroundColor: '#f0f0f0', // Header background color
                                color: '#333', // Header text color
                                fontSize: '16px',
                                '& .MuiDataGrid-row': {
                                    backgroundColor: '#fff', // Row background color
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#f9f9f9', // Alternate row color
                                    },
                                },
                                '& .MuiDataGrid-selectedRowCount': {
                                    color: '#f0f0f0', // Footer row count text color
                                },
                                '& .MuiTablePagination-root': {
                                    backgroundColor: '#f0f0f0', // Header background color
                                    color: '#333', // Header text color
                                },
                                '& .MuiDataGrid-cell:hover': {
                                    backgroundColor: '#fff', // Row background color
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: 'inherit',
                                    },
                                },
                            }}
                        />
                    </div>
                    <button type="main-page-button" onClick={() => navigate('/')}>
                        Back to Main Page
                    </button>
                </>
            )}
        </div>
    );
};

export default Leaderboard;
