import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#60269e' }} elevation={4}>
      <Toolbar sx={{ display: 'flex' }}>
        <Box
          component={Link}
          to="/home"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1,
            '&:hover': {
              color: '#d1c4e9',
            },
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: { xs: '120px', sm: '200px' },
            }}
          >
            HunterGuessr
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/pano"
            startIcon={<SportsEsportsIcon />}
            sx={{
              textTransform: 'none',
              '&:hover': {
                color: '#d1c4e9',
              },
            }}
          >
            Game
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/stats"
            startIcon={<BarChartIcon />}
            sx={{
              textTransform: 'none',
              '&:hover': {
                color: '#d1c4e9',
              },
            }}
          >
            Stats
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/leaderboard"
            startIcon={<LeaderboardIcon />}
            sx={{
              textTransform: 'none',
              '&:hover': {
                color: '#d1c4e9',
              },
            }}
          >
            Leaderboard
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/match_hist"
            startIcon={<HistoryIcon />}
            sx={{
              textTransform: 'none',
              '&:hover': {
                color: '#d1c4e9',
              },
            }}
          >
            Match History
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}
        >
          {user ? (
            <Typography
              variant="subtitle1"
              sx={{
                marginRight: 2,
                color: 'inherit',
              }}
            >
              Welcome back, {user.displayName || user.email}
            </Typography>
          ) : (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    color: '#d1c4e9',
                  },
                }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    color: '#d1c4e9',
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
          <IconButton
            color="inherit"
            component={Link}
            to="/settings"
            sx={{
              '&:hover': {
                color: '#d1c4e9',
              },
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
