const router = require('express').Router()

router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/350/350'
      }]
      
    res.render('places/index', {places})
})
module.exports = router