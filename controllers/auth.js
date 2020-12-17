const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const keys = require('../config/key')


// res.status(200).json({
//     login: {
//         email: req.body.email,
//         password: req.body.password 
//     } 
// })

module.exports.login = async function(req, res){
    const candidate = await User.findOne({email: req.body.email})
    if(candidate){
        const pass = bcrypt.compareSync(req.body.password, candidate.password)
        if(pass){
            const token = jwt.sign({
                userId: candidate._id,
                email: candidate.email
            }, keys.jwt, {expiresIn: 3600})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                massage: 'Введен неверный логин или пароль'
            })
        }
    } else {
        res.status(401).json({
            massage: 'Введен неверный логин или пароль'
        })
    }

}

module.exports.register = async function(req, res){
     const candidate = await User.findOne({email: req.body.email})
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