const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Admin = require('../models/Admin');

// @desc Registe Admin
// @route POST /api/v1/auth/register
exports.register = asyncHandler(async (req, res, next) => {
    // const admin = await Admin.create(req.body);
    res.status(201).json({
        success: true
        // data: admin
    });
});