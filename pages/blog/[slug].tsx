import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query; // Get the blog ID from URL

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">Blog ID: {slug}</Typography>
            {/* Fetch blog details using id */}
        </Box>
    );
};

export default BlogDetail;
