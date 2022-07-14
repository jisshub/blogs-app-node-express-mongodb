const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');

// @desc   Get all blogs
// @route  GET /api/v1/blogs
exports.getBlogs = asyncHandler(async (req, res, next) => {
    const blogs = await Blog.find();
    res.status(200).json({
        success: true,
        count: blogs.length,
        // Note: truncate the body to 100 characters
        data: blogs.map(() => {
            return {
                title: blog.title,
                body: blog.body,
                createdAt: blog.createdAt,
            }
        })
    });
});

// @desc   Get single blog
// @route  GET /api/v1/blogs/:id
exports.getSingleBlog = asyncHandler(async (req, res, next) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        return next(new ErrorResponse(`Blog not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: blog
    });
})