import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import useAOS from '../../types/useAOS';

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useAOS();

  return (
    <>
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 40px' },
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        data-aos="fade-up"
        sx={{
          fontWeight: 'bold',
          marginBottom: '20px',
          color: 'white',
        }}
      >
        Get in Touch
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        data-aos="fade-up"
        sx={{
          marginBottom: '40px',
          color: 'gray',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: { xs: '16px', md: '18px' },
        }}
      >
        Have questions or need more information? Fill out the form below, and
        we’ll get back to you shortly.
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for reaching out!');
        }}
        sx={{
          maxWidth: '600px',
          margin: '20px auto',
          backgroundColor: '#1c1c1c',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Grid container spacing={3} data-aos="fade-up">
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              required
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Email"
              type="email"
              required
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Message"
              multiline
              rows={4}
              required
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#ff5722',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#e64a19',
                },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Details */}
      <Box
        sx={{
          marginTop: '40px',
          color: 'gray',
          fontSize: { xs: '14px', md: '16px' },
        }}
      >
        <Typography variant="body2" data-aos="fade-up">
          You can also reach us at <strong>contact@company.com</strong> or call
          us at <strong>+1 234 567 890</strong>.
        </Typography>
      </Box>
    </Box>
</>
  );
};

export default ContactForm;
