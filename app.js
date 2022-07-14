const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello nodejs');
  });
  

app.listen(PORT, () => {
  console.log(`App runs in ${process.env.NODE_ENV} mode on port ${PORT}`);
});