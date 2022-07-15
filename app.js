const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const hpp = require('hpp');

const blogs = require('./routes/blog');
const comments = require('./routes/comments');
const auth = require('./routes/auth');

const errorHandler = require('./middlewares/error');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(hpp());

app.use('/api/v1/blogs', blogs);
app.use('/api/v1/comments', comments);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(PORT, () => {
  console.log(`App runs in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});