import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        enum: ['technology', 'programming', 'lifestyle', 'startup', 'sports'],
        default: 'startup',
        required: true,
        trim: true,
    }
}, {timestamps: true})

const Blog = mongoose.model('blog', blogSchema)
export default Blog