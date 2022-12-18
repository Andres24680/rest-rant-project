const router = require('express').Router()

router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/new thai image.jpeg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/new cafe img.jpeg'
      }]
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log('Post')

 
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

module.exports = router