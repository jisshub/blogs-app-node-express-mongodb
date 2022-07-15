const ErrorResponse = require('../utils/errorResponse');

function errorHandler(err, req, res, next) {
    let error = {
        ...err
    };
    error.message = err.message;
    console.log(err);
    if (err.name === 'CastError') {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = `Resource with name ${err.keyValue.name} already exist`;
        error = new ErrorResponse(message, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message,
    });
    }

module.exports = errorHandler;