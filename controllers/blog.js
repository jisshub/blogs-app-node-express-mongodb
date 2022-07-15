const Blog = require('../models/Blog');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const path = require('path');

// @desc   Get all blogs
// @route  GET /api/v1/blogs
exports.getBlogs = asyncHandler(async (req, res, next) => {
    const blogs = await Blog.find();
    console.log(blogs);
    res.status(200).json({
        success: true,
        count: blogs.length,
        data: blogs
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
});

// @desc   Create blog
// @route  POST /api/v1/blogs
exports.createBlog = asyncHandler(async (req, res, next) => {
    const blog = await Blog.create(req.body);
    res.status(201).json({
        success: true,
        data: blog
    });
});


// @desc   Update blog
// @route  PUT /api/v1/blogs/:id
exports.updateBlog = asyncHandler(async (req, res, next) => {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
        return next(new ErrorResponse(`Blog not found with id of ${req.params.id}`, 404));
    }
    blog = await Blog.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        data: blog
    });
});


// @desc   Delete blog
// @route  DELETE /api/v1/blogs/:id
exports.deleteBlog = asyncHandler(async (req, res, next) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        return next(new ErrorResponse(`Blog not found with id of ${req.params.id}`, 404));
    }
    blog.remove();
    res.status(200).json({
        success: true,
        data: {}
    });
});