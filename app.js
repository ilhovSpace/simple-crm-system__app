const express = require('express')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/category', categoryRoutes)

module.exports = app