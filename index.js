const express = require('express')
const app = express()

require(`dotenv`).config()

//JSX 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    //Will render home.jsx
    res.render('home')
    
})


//Use this to get any page that doesn't reach any path
app.get('*',(req,res)=>{
    //res.status(404).send("<h1>THIS IS A 404</h1>")
    //This render will grab 404.jsx
    res.render('404')
})

app.listen(process.env.PORT)