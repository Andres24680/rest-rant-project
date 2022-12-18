const React = require('React')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <div>
                <img src="/images/404 project page img.jpeg" alt="404-image" />
            </div>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
  )
}


module.exports = error404