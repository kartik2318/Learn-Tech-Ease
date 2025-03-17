import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import useAOS from '../../types/useAOS';

const AboutUs: React.FC = () => {
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
      {/* Main Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: '40px', color: 'white' }}
      >
        About Us
      </Typography>

      {/* Introductory Paragraph */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '60px',
          color: 'gray',
          lineHeight: 1.8,
          fontSize: { xs: '16px', md: '18px' },
        }}
      >
        At our core, we are passionate about delivering innovative solutions to
        drive your business forward. Our experienced team is dedicated to
        providing excellence in every aspect, making us a reliable partner in
        achieving your goals.
      </Typography>

      {/* Vision & Mission */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#1a1a1a',
          padding: { xs: '20px', md: '40px' },
          marginBottom: '60px',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h5"
          data-aos="fade-up"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          Vision & Mission
        </Typography>
        <Typography
          variant="body2"
          data-aos="fade-right"
          sx={{
            maxWidth: '700px',
            margin: '0 auto',
            marginBottom: '20px',
            color: 'gray',
            lineHeight: 1.6,
            fontSize: { xs: '14px', md: '16px' },
          }}
        >
          <strong>Vision:</strong> To be a global leader in providing innovative
          and transformative solutions for businesses of all sizes.
        </Typography>
        <Typography
          variant="body2"
          data-aos="fade-right"
          sx={{
            maxWidth: '700px',
            margin: '0 auto',
            color: 'gray',
            lineHeight: 1.6,
            fontSize: { xs: '14px', md: '16px' },
          }}
        >
          <strong>Mission:</strong> Empowering businesses with scalable,
          sustainable, and innovative solutions to achieve their goals and make
          a meaningful impact in their industries.
        </Typography>
      </Paper>

      {/* Core Values */}
      <Box sx={{ marginBottom: '60px' }}>
        <Typography
          variant="h5"
          data-aos="fade-up"
          sx={{ fontWeight: 'bold', marginBottom: '40px' }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Integrity',
              description: 'We uphold the highest standards of honesty and ethics.',
            },
            {
              title: 'Innovation',
              description: 'We thrive on creativity to deliver impactful solutions.',
            },
            {
              title: 'Excellence',
              description: 'We are committed to exceeding expectations.',
            },
            {
              title: 'Collaboration',
              description: 'We believe in the power of teamwork.',
            },
            {
              title: 'Customer-Centricity',
              description: 'Our clients are at the heart of every decision.',
            },
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: '20px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  data-aos="fade-right"
                  sx={{ fontWeight: 'bold', marginBottom: '10px', color: 'white' }}
                >
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }} data-aos="fade-right">
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us */}
      <Box>
        <Typography
          variant="h5"
          data-aos="data-up"
          sx={{ fontWeight: 'bold', marginBottom: '40px' }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {[
            'Tailored Solutions for Unique Needs',
            'Dedicated Team of Experts',
            'Proven Industry Experience',
            'Cutting-Edge Technology',
            'Customer-Focused Approach',
          ].map((reason, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: '20px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  data-aos="fade-right"
                  sx={{
                    color: 'gray',
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  {reason}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
