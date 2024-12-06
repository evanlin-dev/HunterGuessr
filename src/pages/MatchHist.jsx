import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './MatchHist.css';

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 150
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
    { id: 1, date: '11/6/2024', time: '1:00', username: 'James Baxter', score: 50 },
];

const MatchHist = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    if (!isLoggedIn) {
        return (
            <Box
                sx={{
                    marginTop: '5em',
                    textAlign: 'center',
                    color: '#f0f0f0',
                    backgroundColor: theme.palette.background.paper,
                    padding: '2em',
                    borderRadius: '15px',
                    width: 'fit-content',
                    ml: 'auto',
                    mr: 'auto',
                    mt: '6em',
                }}
            >
                <Typography variant="h5">Please log in to view your match history.</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1em', marginTop: '1em' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/login"
                        sx={{
                            borderRadius: '5px',
                            '&:hover': {
                                color: '#d1c4e9',
                            },
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/signup"
                        sx={{
                            borderRadius: '5px',
                            '&:hover': {
                                color: '#d1c4e9',
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={{ marginTop: '5em', textAlign: 'center', color: '#f0f0f0' }}>
            <Typography variant="h4">Match History</Typography>
            <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                <div className="data-table">
                    <DataGrid
                        rows={rows}
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
                            backgroundColor: '#f0f0f0',
                            color: '#333',
                            fontSize: '16px',
                            '& .MuiDataGrid-row': {
                                backgroundColor: '#fff',
                                '&:nth-of-type(odd)': {
                                    backgroundColor: '#f9f9f9',
                                },
                            },
                            '& .MuiDataGrid-selectedRowCount': {
                                color: '#f0f0f0',
                            },
                            '& .MuiTablePagination-root': {
                                backgroundColor: '#f0f0f0',
                                color: '#333',
                            },
                            '& .MuiDataGrid-cell:hover': {
                                backgroundColor: '#fff',
                                '&:nth-of-type(odd)': {
                                    backgroundColor: 'inherit',
                                },
                            },
                        }}
                    />
                </div>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{
                    marginTop: '2em',
                    borderRadius: '5px',
                    '&:hover': {
                        color: '#d1c4e9',
                    },
                }}
            >
                Back to Main Page
            </Button>
        </Box>
    );
};

export default MatchHist;