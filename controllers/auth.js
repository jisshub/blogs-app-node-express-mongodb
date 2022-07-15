const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Admin = require('../models/Admin');

// @desc Registe Admin
// @route POST /api/v1/auth/register
exports.register = asyncHandler(async (req, res, next) => {
    const {name, email, password} = req.body;
    const admin = await Admin.create({
        name,
        email,
        password
    });
    sendTokenResponse(admin, 200, res);
});

// @desc Login Admin
// @route POST /api/v1/auth/login
exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }
    const admin = await Admin.findOne({email}).select('+password');

    if(!admin) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isMatch = await admin.matchPasswords(password);

    if(!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }
    sendTokenResponse(admin, 200, res);
});

const sendTokenResponse = (admin, statusCode, res) => {
    const token = admin.getSignedJwtToken();
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }
    res.status(statusCode).cookie('cookie-1', token, options).json({
        success: true,
        token: token,
    });
};