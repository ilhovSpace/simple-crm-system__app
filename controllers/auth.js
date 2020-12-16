module.exports.login = function(req, res){
    res.status(200).json({
        login: 'log from cont'
    })
}

module.exports.register = function(req, res){
    res.status(200).json({
        register: 'log from cont'
    })
}