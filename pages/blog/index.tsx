import React from 'react';
import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/router';

interface BlogProps {
    blogs: {
        id: string;
        title: string;
        description: string;
        image: string;
        author: string;
        tag: string[];
    }[];
    trendingTopics: {
        id: string;
        name: string;
    }[];
    featuredBlogs: {
        id: string;
        title: string;
        description: string;
        image: string;
        author: string;
    }[];
}

const Blog: React.FC<BlogProps> = ({ blogs, trendingTopics, featuredBlogs }) => {
    
    const router = useRouter();

    return (
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: 6,
                    px: 2,
                    backgroundColor: '#333',
                    color: 'white',
                    borderRadius: 4,
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    }}
                >
                    Discover, Learn, and Innovate
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        maxWidth: 'md',
                        margin: '0 auto',
                    }}
                >
                    Your go-to resource for tech insights, tutorials, and updates from industry
                    experts.
                </Typography>
            </Box>

            {/* Trending Topics */}
            <Box sx={{ mt: 8 }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
                >
                    Trending Topics
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
                    {trendingTopics.map((topic, index) => (
                        <Chip
                            key={index}
                            label={topic}
                            clickable
                            sx={{
                                backgroundColor: '#ff5722',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Featured Blog */}
            <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
                Featured Blog of the Month
            </Typography>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={50}
                slidesPerView={1} // Ensures only one blog is displayed at a time
                style={{ marginTop: '20px' }}
            >
                {featuredBlogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <Card
                            sx={{
                                maxWidth: 600,
                                margin: '0 auto',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                p: 3,
                                textAlign: 'center',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={blog.image}
                                alt={blog.title}
                                sx={{ width: '100%', borderRadius: 2 }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}
                                >
                                    {blog.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}
                                >
                                    {blog.description}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    sx={{ mt: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                                >
                                    Author : {blog.author}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        borderRadius: 50,
                                        mt: 3,
                                        backgroundColor: '#ff5722',
                                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                                    }}
                                >
                                    Read Full Article
                                </Button>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>

            {/* Latest Article */}
            <Box sx={{ mt: 6 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    align="center"
                    gutterBottom
                    sx={{
                        mb: 4,
                        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                        color: 'white',
                    }}
                >
                    Latest Articles
                </Typography>

                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                    {blogs.map((blog: any) => (
                        <Grid item xs={6} sm={6} md={4} key={blog.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    borderRadius: 2,
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={blog.titleImage}
                                    alt={blog.title}
                                    sx={{
                                        borderRadius: '8px 8px 0 0',
                                        objectFit: 'cover',
                                        display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                            lineHeight: 1.4,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mb: 1.5,
                                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {blog.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        sx={{
                                            mb: 1,
                                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                            color: 'text.primary',
                                        }}
                                    >
                                        Author : {blog.author}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                        {blog.tag.map((tag: any, index: any) => (
                                            <Chip
                                                key={index}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    backgroundColor: '#ff5722',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                                <Box sx={{ p: { xs: 1, sm: 1.5 }, textAlign: 'center' }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            textTransform: 'none',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                        onClick={() => router.push(`/blog/${blog.slug}`)}
                                    >
                                        Read More
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>



        </Container>
    );
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/getBlogs');
    const data = await res.json();
    
    return {
        props: {
            blogs: data.blogs,
            trendingTopics: data.trendingTopics,
            featuredBlogs: data.featuredBlogs,
        },
    };
}

export default Blog;