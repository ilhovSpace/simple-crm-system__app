const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message: 'server works'})

})

app.listen(5000, () => console.log("server hes been started"))