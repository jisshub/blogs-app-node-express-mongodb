const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: [true, 'please add a title']
    },
    body: {
        type: String,
        required: true,
        trim: [true, 'please add a body'],
        minlength: [100, 'body must be at least 10 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Blog', BlogSchema);
