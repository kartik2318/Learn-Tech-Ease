import React from 'react';
import { Box, Typography, Link as MuiLink, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'Projects', path: '/projects' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '32px 16px',
      }}
    >
      {/* Main Footer Content */}
      <Grid
        container
        spacing={4}
        sx={{
          marginBottom: 4,
        }}
      >
        {/* Company Highlights Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Company Highlights
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', lineHeight: 1.8 }}>
            - 20+ years of industry excellence. <br />
            - Trusted by 10,000+ clients globally. <br />
            - Awarded for innovation and sustainability. <br />
            - Dedicated to empowering businesses with cutting-edge solutions.
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {navItems.map((item) => (
              <MuiLink
                key={item.label}
                href={item.path}
                underline="none"
                sx={{
                  color: 'gray',
                  fontWeight: 'bold',
                  '&:hover': { color: 'white' },
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Box>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Resources
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MuiLink href="/privacy-policy" underline="none" sx={{ color: 'gray', '&:hover': { color: 'white' } }}>
              Privacy Policy
            </MuiLink>
            <MuiLink href="/terms-of-service" underline="none" sx={{ color: 'gray', '&:hover': { color: 'white' } }}>
              Terms of Service
            </MuiLink>
            <MuiLink href="/faq" underline="none" sx={{ color: 'gray', '&:hover': { color: 'white' } }}>
              FAQ
            </MuiLink>
            <MuiLink href="/support" underline="none" sx={{ color: 'gray', '&:hover': { color: 'white' } }}>
              Support
            </MuiLink>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', lineHeight: 1.8 }}>
            Address: 123 Corporate Ave, Suite 456, City, Country
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', lineHeight: 1.8 }}>
            Phone: +123 456 7890
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', lineHeight: 1.8 }}>
            Email: support@company.com
          </Typography>
        </Grid>
      </Grid>

      {/* Social Media Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginBottom: 4,
        }}
      >
        <IconButton
          aria-label="Facebook"
          sx={{ color: 'gray', '&:hover': { color: 'white' } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          sx={{ color: 'gray', '&:hover': { color: 'white' } }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          sx={{ color: 'gray', '&:hover': { color: 'white' } }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          sx={{ color: 'gray', '&:hover': { color: 'white' } }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: 'center',
          borderTop: '1px solid gray',
          paddingTop: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'gray' }}>
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
