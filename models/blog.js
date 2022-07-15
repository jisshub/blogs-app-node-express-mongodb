const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please add a title'],
        trim: true,
        maxlength: 50
    },
    body: {
        type: String,
        required: [true, 'please add a body'],
        trim: true,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// BlogSchema.pre('save', function (next) {
//     this.slug = slugify(this.title, { lower: true });
//     next();
//     console.log(this.slug);
//     next();
// })

module.exports = mongoose.model('Blog', BlogSchema);
