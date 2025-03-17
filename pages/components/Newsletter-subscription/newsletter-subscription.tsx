import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import useAOS from '../../types/useAOS';

const NewsletterSubscription: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useAOS();

  return (
    <>
    <Box
      sx={{
        backgroundColor: 'black', // Matching your website's design
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 40px' },
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        data-aos="fade-right"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: 'white',
        }}
      >
        Stay Updated
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        data-aos="fade-right"
        sx={{
          marginBottom: '40px',
          color: 'gray',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: { xs: '16px', md: '18px' },
        }}
      >
        Subscribe to our newsletter and stay updated with the latest insights,
        news, and trends from our team.
      </Typography>

      {/* Subscription Form */}
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          // Add your subscription logic here
          alert('Thank you for subscribing!');
        }}
        sx={{
          maxWidth: '600px',
          margin: '20px auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '20px',
        }}
      >
        <TextField
          data-aos="fade-up"
          type="email"
          placeholder="Enter your email address"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
          }}
        />
        <Button
          type="submit"
          data-aos="fade-up"
          variant="contained"
          sx={{
            backgroundColor: '#ff5722',
            color: 'white',
            padding: '10px 20px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#e64a19',
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Disclaimer */}
      <Typography
        variant="body2"
        data-aos="fade-right"
        sx={{
          marginTop: '20px',
          color: 'gray',
          fontSize: { xs: '14px', md: '16px' },
        }}
      >
        By subscribing, you agree to receive our emails. You can unsubscribe at
        any time.
      </Typography>
    </Box>
</>
  );
};

export default NewsletterSubscription;
