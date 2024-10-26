import React from 'react';
import { Box, Typography } from '@mui/material';

function Leaderboard() {
  return (
    <Box sx={{ padding: '2em', color: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard Page
      </Typography>
      <Typography variant="body1">
        This is the Leaderboard page.
      </Typography>
    </Box>
  );
}

export default Leaderboard;