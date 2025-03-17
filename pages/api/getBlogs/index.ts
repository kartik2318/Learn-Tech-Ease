import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { connectDB } from '../../../lib/db';

// Connect to MongoDB
connectDB();

// Define schemas
const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    author: String,
    tag: [String],
});

const TopicSchema = new mongoose.Schema({
    name: String,
});

const FeaturedBlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    author: String,
});

const LearningSchema = new mongoose.Schema({
    title: String,
    slug: String,
    image: String,
    description: String,
    content: String,
})

// Models
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
const Topic = mongoose.models.Topic || mongoose.model('Topic', TopicSchema);
const FeaturedBlog = mongoose.models.FeaturedBlog || mongoose.model('FeaturedBlog', FeaturedBlogSchema);
const LearningResources = mongoose.models.LearningResources || mongoose.model('LearningResources', LearningSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { slug } = req.query;

        if (slug) {
            // Fetch a single blog post based on the slug
            const blog = await LearningResources.findOne({ slug });

            if (!blog) {
                return res.status(404).json({ error: 'Blog not found' });
            }

            return res.status(200).json(blog);
        }
        const blogs = await Blog.find({});
        const trendingTopics = await Topic.find({});
        const featuredBlogs = await FeaturedBlog.find({});
        const learningResources = await LearningResources.find({});

        res.status(200).json({
            blogs,
            trendingTopics: trendingTopics.map((t: any) => t.name),
            featuredBlogs,
            learningResources
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data', details: error });
    }
}
