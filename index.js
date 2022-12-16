require('dotenv').config() 

const express = require('express')
const router = require('./controllers/places')
const app = express()

app.set('view engin', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/',  (req, res) => {
    res.render ('home')     // this is what is seen at browser     
})

app.get('*', (req, res) => {
    res.status(404).send('<h1> You have reached a 404 page </h1>')
})

app.listen(process.env.PORT)