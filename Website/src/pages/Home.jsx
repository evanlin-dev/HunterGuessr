import React from 'react';
import { Typography, Box, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '64px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '80vh',
                pt: 8,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    maxWidth: 800,
                    width: '90%',
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    opacity: 1,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ color: 'white', }}>
                    Welcome to HunterGuessr!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Explore the game.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/pano"
                        sx={{
                            mr: 2, mb: 2, '&:hover': {
                                color: '#d1c4e9',
                            },
                        }}
                    >
                        Play Game
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/stats"
                        sx={{
                            mr: 2, mb: 2, '&:hover': {
                                color: '#d1c4e9',
                            },
                        }}
                    >
                        View Stats
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/leaderboard"
                        sx={{
                            mb: 2, '&:hover': {
                                color: '#d1c4e9',
                            },
                        }}
                    >
                        Leaderboard
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Home;
