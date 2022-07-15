const express = require('express')
const router = express.Router()

const { getBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog');

const { protect } = require('../middlewares/auth');

const commentRouter = require('../routes/comments');

router.use('/:blogId/comments', commentRouter);

router.route('/')
    .get(getBlogs)
    .post(protect, createBlog);

router.route('/:id')
    .get(getSingleBlog)
    .put(protect, updateBlog)
    .delete(protect, deleteBlog);


module.exports = router;