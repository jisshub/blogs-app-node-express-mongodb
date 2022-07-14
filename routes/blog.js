const express = require('express')
const router = express.Router()

const { getBlogs, getSingleBlog } = require('../controllers/blog')

router.route('/').get(getBlogs);
router.route('/:id').get(getSingleBlog);

module.exports = router;