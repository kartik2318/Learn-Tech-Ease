import React from 'react';
import Head from 'next/head';
import { Box, Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import AboutUs from './components/About/about-us';
import Services from './components/What We Offer/services';
import TeamHighlights from './components/TeamHighlights/team-highlights';
import NewsletterSubscription from './components/Newsletter-subscription/newsletter-subscription';
import ContactForm from './components/Contact-Form/contact-form';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Our Company</title>
        <meta name="description" content="Welcome to our company's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0))',
          color: 'white',
          textAlign: 'center',
          padding: { xs: '40px 20px', md: '100px 20px' },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '32px', color: 'gray' }}>
          We provide exceptional services to help you succeed.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff5722',
            color: 'white',
            '&:hover': { backgroundColor: '#ff5722' },
          }}
          href="/about"
        >
          Explore More
        </Button>
      </Box>

      <Divider
        sx={{
          borderColor: 'gray',
          opacity: 0.3,
          margin: { xs: '20px 0', md: '10px 0' },
        }}
      />

      {/* About Us Section */}
      <AboutUs />

      <Divider
        sx={{
          borderColor: 'gray',
          opacity: 0.3,
          margin: { xs: '20px 0', md: '10px 0' },
        }}
      />

      {/* Services Section */}
      <Services />

      <Divider
        sx={{
          borderColor: 'gray',
          opacity: 0.3,
          margin: { xs: '20px 0', md: '10px 0' },
        }}
      />

      {/* Team Highlights Section */}
      <TeamHighlights />

      <Divider
        sx={{
          borderColor: 'gray',
          opacity: 0.3,
          margin: { xs: '20px 0', md: '10px 0' },
        }}
      />

      {/* Partners */}
      {/* Yet To be implemented */}

      {/* Contact Form */}
      <ContactForm />

      {/* Newsletter-Subscription */}
      <NewsletterSubscription />




    </>
  );
};

export default Home;
