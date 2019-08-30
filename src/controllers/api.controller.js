exports.getApiStatus = function(req, res, next) {
    res.status(200).json({
        message: 'Ok 200'
    })
}