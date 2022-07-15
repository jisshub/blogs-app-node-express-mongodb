const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');
const Comment = require('../models/Comments');
const Blog = require('../models/Blog');

// @route  GET api/v1/comments
// @route GET api/v1/blogs/:blogId/comments
exports.getComments = asyncHandler(async (req, res, next) => {
    let query;
    if (req.params.blogId) {
        query = Comment.find({ blog: req.params.blogId });
    } else {
        query = Comment.find().populate('blog', 'title body');
    }
    const comments = await query;
    res.status(200).json({
        success: true,
        count: comments.length,
        data: comments
    });
});

// @desc - Create comment
// @route - POST api/v1/blogs/:blogId/comments
exports.createComment = asyncHandler(async (req, res, next) => {
    req.body.blog = req.params.blogId;
    const blog = await Blog.findById(req.params.blogId);
    if(!blog) {
        return next(new ErrorResponse(`Blog not found with id of ${req.params.blogId}`, 404));
    }
    comment = await Comment.create(req.body);
    res.status(201).json({
        success: true,
        data: comment
    })
});