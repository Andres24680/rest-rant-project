require('dotenv').config() 

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/',  (req, res) => {
    res.send('Hello world')      // this is what is seen at browser     
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> You have reached a 404 page </h1>')
})

app.listen(process.env.PORT)