module.exports = (resonse, error) => {
    resonse.status(500).json({
        success: false,
        message: error.message ? error.message : error
    })
}