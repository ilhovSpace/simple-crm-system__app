const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports.login = function(req, res){
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password 
        } 
    })
}

module.exports.register = async function(req, res){
     const candidate = await User.findOne({email: req.body.password})
     if(candidate){
         res.status(409).json({
             massage: 'Пользователь с таким Email уже зарегистрирован'
         })
     } else {
        const solt = bcrypt.genSaltSync(12)
        const pass = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(pass, solt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch(e){
            console.log(e)
        }
     }

}