import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function NavBar() {
  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
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

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            color="inherit"
            component={Link}
            to="/pano"
            startIcon={<SportsEsportsIcon />}
            sx={{ textTransform: 'none' }}
          >
            Game
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/stats"
            startIcon={<BarChartIcon />}
            sx={{ textTransform: 'none' }}
          >
            Stats
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/leaderboard"
            startIcon={<LeaderboardIcon />}
            sx={{ textTransform: 'none' }}
          >
            Leaderboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
