const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) 
    {
        token = req.headers.authorization.split(' ')[1];
    } 
    else if (req.cookies.token) 
    {
        token = req.cookies.token;
    }

    if (!token) {
        return next(new ErrorResponse('not authorized to access the route', 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await Admin.findById(decoded.id);
        next();
    } catch (err) {
        return next(new ErrorResponse('not authorzed to access the route', 401));
    }
});