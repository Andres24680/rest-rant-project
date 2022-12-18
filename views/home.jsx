const React = require('react')
const Def = require('./default')


function home() {
  return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
          
            <a href="/places">
  <button className="btn btn-primary">Places Page</button>
</a>
<div>
                <img src="/images/home page img.avif" alt="home peach img"/>
            </div>

        </main>
    </Def>
  )
}
module.exports = home
