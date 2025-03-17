// components/TeamHighlights.tsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import useAOS from '../../types/useAOS';

const teamMembers = [
    {
        name: 'Soon to be Announced',
        role: 'CEO & Founder',
        image: '/placeholder-avatar.jpg',
      },
      {
        name: 'Soon to be Announced',
        role: 'CTO',
        image: '/placeholder-avatar.jpg',
      },

    {
        name: 'Soon to be Announced',
        role: 'Human Resources Manager',
        image: '/images/eve.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'Marketing Head',
        image: '/images/frank.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'Project Manager',
        image: '/images/alice.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'UX Designer',
        image: '/images/diana.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'Frontend Developer',
        image: '/images/bob.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'Backend Developer',
        image: '/images/charlie.jpg',
    },
    {
        name: 'Soon to be Announced',
        role: 'QA Engineer',
        image: '/images/diana.jpg',
    },
];

const TeamHighlights: React.FC = () => {
    useAOS();
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                color: 'white',
                padding: { xs: '40px 20px', md: '80px 40px' },
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                data-aos="fade-up"
                sx={{ fontWeight: 'bold', marginBottom: '32px', textTransform: 'uppercase' }}
            >
                Meet Our Team
            </Typography>
            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up"> 
                        <Card
                            sx={{
                                backgroundColor: '#333333',
                                color: 'white',
                                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Avatar
                                    src={member.image}
                                    data-aos="fade-up"
                                    alt={member.name}
                                    sx={{ width: 100, height: 100, marginBottom: '16px', border: '2px solid #ff5722' }}
                                />
                                <Typography
                                    variant="h6"
                                    data-aos="fade-up"
                                    sx={{ fontWeight: 'bold', marginBottom: '8px', textTransform: 'capitalize' }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    data-aos="fade-up"
                                    sx={{ color: 'gray', textTransform: 'uppercase' }}
                                >
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TeamHighlights;
