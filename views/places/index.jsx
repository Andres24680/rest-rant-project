const React =  require('react')
const Def = require('../default')

function places(placesinfo){
    let placeFormat =placesinfo.places.map((place)=>{
        return(
            <Def>
                <main>
                    {/* <h1>Places</h1> */}
                    <h2>{place.name}</h2>
                    <img src = {place.pic} alt = {place.name}></img>
                </main>
            </Def>
        )
    })
    return(
        <Def>
            <main>
                <h1> Plaecs Index Page</h1>
                {placeFormat}
            </main>
        </Def>
    )
}

module.exports = places