import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#60269e' }} elevation={4}>
      <Toolbar
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component={Link}
          to="/home"
          sx={{
            position: 'absolute',
            left: 16,
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none',
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

        <Box sx={{ display: 'flex', gap: 1 }}>
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
        </Box>

        <IconButton
          color="inherit"
          component={Link}
          to="/settings"
          sx={{
            position: 'absolute',
            right: 16,
            '&:hover': {
              color: '#d1c4e9',
            },
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
