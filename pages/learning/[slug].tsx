import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Card, CardContent, Typography, Button, Fade, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const DetailLearning = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [detailLearning, setDetailLearning] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (!slug || typeof slug !== "string") return;

        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/getBlogs?slug=${slug}`);
                if (!response.ok) throw new Error("Data not found");
                const data = await response.json();
                setDetailLearning(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!detailLearning) return <p>Data not found</p>;

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentTopicIndex((prev) => Math.min(prev + 1, detailLearning.topics.length - 1));
            setFade(true);
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentTopicIndex((prev) => Math.max(prev - 1, 0));
            setFade(true);
        }, 300);
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 4 }, width: "100%" }}>
            {/* Hero Section */}
            <Box mb={8} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                background: "linear-gradient(135deg, #1e1e1e, #2a2a2a)",
                padding: "40px", borderRadius: "10px"
            }}>
                <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: "#f5f5f5" }}>
                    {detailLearning.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#b0b0b0" }}>
                    {detailLearning.description}
                </Typography>
            </Box>

            {/* Table of Contents */}
            <Box
                mb={10}
                sx={{
                    background: "linear-gradient(to right, #1e1e1e, #2a2a2a)",
                    borderRadius: 3,
                    padding: 4,
                    boxShadow: 3,
                    maxWidth: 500,
                    mx: "auto",
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{ textAlign: "center", mb: 3, color: "#f5f5f5" }}
                >
                    Table of Contents
                </Typography>
                <Paper
                    elevation={5}
                    sx={{
                        backgroundColor: "#252525",
                        color: "#f5f5f5",
                        borderRadius: 2,
                        overflow: "hidden",
                    }}
                >
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#333" }}>
                                    <TableCell sx={{ fontWeight: 700, padding: "10px", color: "#f5f5f5" }}>
                                        #
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 700, padding: "10px", color: "#f5f5f5" }}>
                                        Section
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {detailLearning.table_of_contents.map((item: any, index: number) => (
                                    <TableRow
                                        key={item.id}
                                        hover
                                        sx={{
                                            transition: "background 0.3s",
                                            cursor: "pointer",
                                            ":hover": { backgroundColor: "#444" },
                                        }}
                                        onClick={() => setCurrentTopicIndex(index)}
                                    >
                                        <TableCell sx={{ padding: "10px", fontWeight: 500, color: "#f5f5f5" }}>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell sx={{ padding: "10px", fontWeight: 500, color: "#f5f5f5" }}>
                                            {item.title}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>



            {/* Topic Display */}
            <Fade in={fade} timeout={300}>
                <Card sx={{ mb: 4, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: "#1e1e1e", color: "#f5f5f5" }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            {detailLearning.topics[currentTopicIndex]?.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ color: "#b0b0b0" }}>
                            {detailLearning.topics[currentTopicIndex]?.content}
                        </Typography>
                    </CardContent>
                </Card>
            </Fade>

            {/* Navigation Buttons */}
            <Box display="flex" justifyContent="space-between" mt={4}>
                <Button
                    variant="contained"
                    onClick={handlePrev}
                    disabled={currentTopicIndex === 0}
                    sx={{ backgroundColor: "#333", color: "#fff", ":hover": { backgroundColor: "#555" } }}
                >
                    Prev
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={currentTopicIndex === detailLearning.topics.length - 1}
                    sx={{ backgroundColor: "#007BFF", color: "#fff", ":hover": { backgroundColor: "#0056b3" } }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default DetailLearning;