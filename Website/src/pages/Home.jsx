import React from 'react';
import {
    Typography,
    Box,
    Button,
    Paper,
    Grid,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AnnouncementIcon from '@mui/icons-material/Announcement';

function Home() {
    return (
        <Box
            sx={{
                backgroundColor: '#373737',
                minHeight: '100vh',
                paddingTop: '80px',
                paddingBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                mt: 10,
                borderRadius: 6,
            }}
        >

            <Container maxWidth="lg">
                <Paper
                    elevation={6}
                    sx={{
                        padding: { xs: 4, md: 8 },
                        borderRadius: 4,
                        backgroundColor: '#4a4a4a',
                        color: '#fff',
                        textAlign: 'center',
                        mb: 6,
                        mt: -4,
                    }}
                >
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        Welcome to HunterGuessr!
                    </Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 4,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        Explore the world without leaving your home. Guess locations, compete with friends, and climb the leaderboard!
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/pano"
                            aria-label="Play the game"
                            sx={{
                                mr: 2,
                                mb: 2,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.25rem',
                                textTransform: 'none',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                    color: '#d1c4e9',
                                },
                            }}
                        >
                            Play Now
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            component={Link}
                            to="/signup"
                            aria-label="Sign up for the game"
                            sx={{
                                mb: 2,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.25rem',
                                textTransform: 'none',
                                borderColor: '#fff',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    color: '#d1c4e9',
                                    borderColor: '#d1c4e9',
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        padding: { xs: 4, md: 6 },
                        borderRadius: 4,
                        backgroundColor: '#f5f5f5',
                        color: '#000',
                        mb: 6,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        What is HunterGuessr?
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ maxWidth: 800, mx: 'auto', mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}
                    >
                        HunterGuessr is an exciting game that challenges your geographical knowledge and observational skills. Dive into immersive panoramas and guess where you are!
                    </Typography>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        padding: { xs: 4, md: 6 },
                        borderRadius: 4,
                        backgroundColor: '#f5f5f5',
                        color: '#000',
                        mb: 6,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Features
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={4}>
                            <InfoIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                Explore Unknown Places
                            </Typography>
                            <Typography>
                                Travel virtually to random locations around the world and test your ability to recognize surroundings.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <EmojiEventsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                Compete with Friends
                            </Typography>
                            <Typography>
                                Challenge your friends and see who has the best geographical knowledge.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AnnouncementIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                Stay Updated
                            </Typography>
                            <Typography>
                                Get the latest updates, new features, and announcements directly on the platform.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        padding: { xs: 4, md: 6 },
                        borderRadius: 4,
                        backgroundColor: '#f5f5f5',
                        color: '#000',
                        mb: 6,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq1-content" id="faq1-header">
                                    <Typography variant="h6">How do I start playing HunterGuessr?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="white">
                                        Click on the "Play Now" button on the homepage. You'll be taken to a panoramic view of a random location. Analyze the surroundings and make your guess by selecting a spot on the map.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq3-content" id="faq3-header">
                                    <Typography variant="h6">How are my scores calculated?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="white">
                                        Your score is based on the accuracy of your guess. The closer your guess is to the actual location, the higher your points. Consistently accurate guesses will help you climb the leaderboard.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faq4-content"
                                    id="faq4-header"
                                >
                                    <Typography variant="h6">How can HunterGuessr help me learn about Hunter Campus?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="white">
                                        By navigating through various panoramic views of Hunter's Campus, you'll become more familiar with its landmarks, pathways, and hidden gems. Each guess reinforces your spatial awareness and knowledge of the campus layout.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="faq4-content"
                                    id="faq4-header"
                                >
                                    <Typography variant="h6">Where does this game take place?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="white">
                                        It takes place at the various buildings at Hunter's Campus, located at{' '}
                                        <a
                                            href="https://maps.app.goo.gl/qztN42UK84KcS9gT9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: '#1976d2', textDecoration: 'none' }}
                                        >
                                            695 Park Ave, New York, NY 10065
                                        </a>
                                        .
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Paper>

                <Box sx={{ backgroundColor: '#60269e', color: '#fff', py: 4, borderRadius: 4 }}>
                    <Typography variant="body2" align="center" color="white">
                        © {new Date().getFullYear()} HunterGuessr. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;
