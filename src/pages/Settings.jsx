import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  getAuth,
  signOut,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from 'firebase/auth';

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email || '');

        // TODO: Retrieve the username from your database
        
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSave = () => {
    const user = auth.currentUser;
    if (user) {
      const promises = [];

      // TODO: Save the username to your database

      if (email && email !== user.email) {
        promises.push(
          updateEmail(user, email).catch((error) => {
            console.error('Error updating email:', error);
          })
        );
      }

      if (password) {
        promises.push(
          updatePassword(user, password).catch((error) => {
            console.error('Error updating password:', error);
          })
        );
      }

      Promise.all(promises)
        .then(() => {
          console.log('Settings saved successfully');
        })
        .catch((error) => {
          console.error('Error saving settings:', error);
        });
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

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
        overflow: 'hidden',
        mt: '3em'
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: '100%',
          borderRadius: 4,
          backgroundColor: 'background.paper',
          opacity: 1,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Account Settings
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="New Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ mt: 3 }}
            fullWidth
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogout}
            sx={{ mt: 2 }}
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Settings;
