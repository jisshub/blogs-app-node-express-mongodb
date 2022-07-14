const express = require('express')
const router = express.Router()

const { getBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog')

router.route('/')
    .get(getBlogs)
    .post(createBlog);

router.route('/:id')
    .get(getSingleBlog)
    .put(updateBlog)
    .delete(deleteBlog);


module.exports = router;