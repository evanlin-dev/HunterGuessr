import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

import backgroundImage from '../assets/images/HunterCoverPicture.png';


const Login = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Sign in with Firebase
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          
          // Get user email and create username from it
          const userEmail = userCredential.user.email;
          const username = userEmail.split('@')[0]; // Creates username from email prefix
          
          // Store user information in localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('userEmail', userEmail);
          
          // Verify or create user score record in backend
          try {
              const response = await axios.get(`https://hunterguessr-6d520ba70010.herokuapp.com/retrieve_login/${userEmail}`);
              
              if (!response.data) {
                  // If user doesn't exist in backend, create them
                  await axios.post('https://hunterguessr-6d520ba70010.herokuapp.com/insert_login', {
                      username: username,
                      email: userEmail
                  });
                  
                  // Initialize user score
                  await axios.post('https://hunterguessr-6d520ba70010.herokuapp.com/insert_score', {
                      username: username,
                      score: 0
                  });
              }
          } catch (error) {
              console.error('Error setting up user in backend:', error);
          }

          alert('Login successful!');
          navigate('/Pano');
          
      } catch (error) {
          console.error(error);
          alert(error.message);
      }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          maxWidth: 400,
          width: '100%',
          zIndex: 1,
          color: theme.palette.text.primary,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => navigate('/')}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" component="h1" gutterBottom>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
