exports.getApiRoute = async (req, res, next) => {
    res.cookie('SESS-ID', '1', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
    }).status(200).json({
        status: '200 Ok'
    });
    next();
}