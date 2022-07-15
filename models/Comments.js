const mongoose =require('mongoose');
const Blog = require('../models/Blog');

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a comment'],
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: 'Blog',
        required: true
    }
});

module.exports = mongoose.model('Comment', CommentSchema);