import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material"
import useAOS from "../../types/useAOS";

const Services: React.FC = () => {
    useAOS();
    return (
        <Box sx={{ padding: '40px 20px' }}>
  <Typography
    variant="h4"
    data-aos="fade-up"
    sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '32px' }}
  >
    What We Offer
  </Typography>
  <Grid container spacing={4}>
    {[
      {
        title: 'Innovative Solutions',
        description:
          'We provide cutting-edge tools and technologies to solve complex challenges.',
        href: '/services',
      },
      {
        title: 'Digital Transformation',
        description:
          'Empowering businesses to modernize their workflows and drive efficiency.',
        href: '/services',
      },
      {
        title: 'Custom Software Development',
        description:
          'Scalable and secure software solutions tailored to your unique requirements.',
        href: '/projects',
      },
      {
        title: 'Data-Driven Insights',
        description:
          'Transform data into actionable insights to drive smarter decision-making.',
        href: '/about',
      },
      {
        title: 'Customer-Centric Services',
        description:
          'Delivering exceptional customer experiences to build loyalty and satisfaction.',
        href: '/contact',
      },
    ].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: '#1c1c1c',
            color: 'white',
            '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
          }}
        >
          <CardContent>
            <Typography data-aos="fade-up" variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {item.title}
            </Typography>
            <Typography data-aos="fade-up" variant="body2" sx={{ color: 'gray', marginBottom: '16px' }}>
              {item.description}
            </Typography>
            <Button
              variant="outlined"
              data-aos="fade-up"
              sx={{
                color: '#ff5722',
                borderColor: '#ff5722',
                '&:hover': { backgroundColor: '#ff5722', color: 'white' },
              }}
              href={item.href}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
    )
}

export default Services;