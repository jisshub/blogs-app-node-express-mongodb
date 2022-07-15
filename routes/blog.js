const express = require('express')
const router = express.Router()

const { getBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog');

const commentRouter = require('../routes/comments');

router.use('/:blogId/comments', commentRouter);

router.route('/')
    .get(getBlogs)
    .post(createBlog);

router.route('/:id')
    .get(getSingleBlog)
    .put(updateBlog)
    .delete(deleteBlog);


module.exports = router;