import { useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CircularProgress } from "@mui/material";
import router from "next/router";
import Image from "next/image";

interface LearningResource {
    _id: string;
    title: string;
    description: string;
    image: string;
    content: string;
    slug: string;
}

const Learning = () => {
    const [learningResources, setLearningResources] = useState<LearningResource[]>([]);
    const [loading, setLoading] = useState(true);
    const checkData = learningResources.map(testData => console.log('Image: ', testData.image))

    console.log('Check Data: ', checkData);



    useEffect(() => {
        const fetchLearningResources = async () => {
            try {
                const response = await fetch("/api/getBlogs");
                const data = await response.json();
                setLearningResources(data.learningResources || []);
            } catch (error) {
                console.error("Error fetching learning resources:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLearningResources();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                mb={8}
                color="white"
                sx={{
                    position: "relative",
                    display: "inline-block",
                    px: 3, // Padding left and right
                    py: 1, // Padding top and bottom
                    border: "1px solid white", // Border effect
                    borderRadius: "8px", // Rounded corners
                    textTransform: "uppercase", // Optional: Makes it more impactful
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive text size
                }}
            >
                Learning just got easy 😀
            </Typography>


            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                    <CircularProgress size={50} />
                </Box>
            ) : (
                <Box display="flex" justifyContent="center">
                    <Box
                        display="grid"
                        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
                        gap={3}
                        justifyContent="center"
                    >
                        {learningResources.map((resource) => (
                            <Card
                                key={resource._id}
                                sx={{
                                    width: "100%",
                                    maxWidth: 350,
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%" // Ensures uniform height
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: 180, // Fixed height
                                        display: "flex",
                                        justifyContent: "center", // Center horizontally
                                        alignItems: "center", // Center vertically
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        backgroundColor: "#f5f5f5", // Optional: Gives a nice background
                                    }}
                                >
                                    <Image
                                        src={resource.image}
                                        alt={resource.title}
                                        width={150} // Adjust width to control image size
                                        height={150} // Adjust height to maintain aspect ratio
                                        objectFit="contain" // Ensures the image is fully visible
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {resource.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        mb={2}
                                        mt={1}
                                        sx={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 3, // Limits to 3 lines
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {resource.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            textTransform: "none",
                                            marginTop: "auto",
                                            background: "#22b378",
                                            "&:hover": { textDecoration: "underline" }
                                        }} // Pushes the button to the bottom
                                        onClick={() => router.push(`/learning/${resource.slug}`)}
                                    >
                                        Start Learning
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Learning;