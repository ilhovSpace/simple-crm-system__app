const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const keys = require('./config/key')
const app = express()

mongoose.connect(keys.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>console.log('mg connected'))
    .catch(e=>console(e))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)

module.exports = app