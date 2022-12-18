const React = require('react')
const Def = require('./default')


function home() {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/404 project page img.jpeg" alt="404 imag" id="404 img"/>
            </div>
            <a href="/places">
  <button className="btn btn-primary">Places Page</button>
</a>

        </main>
    </Def>
  )
}
module.exports = home
