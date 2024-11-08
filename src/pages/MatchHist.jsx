import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MatchHist = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
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

  // Your existing match history code (to be displayed when the user is logged in)
  return (
    <Box sx={{ marginTop: '5em', textAlign: 'center', color: '#f0f0f0' }}>
      <Typography variant="h4">Match History</Typography>
      {/* Display match history content here */}
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
