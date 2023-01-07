const React = require('react')
const Def = require('../default')

function show(data){
  return (
    <Def>
         <main>
             <section>
                 <img className="img-thumbnail" src={data.place.pic} alt={data.place.name} />
                 <h1>{data.place.name}</h1>
             </section>
             <h1><h3>Located in {data.place.city}, {data.place.state}</h3></h1>
             <section>
                 <h2>Rating</h2>
                 
             </section>
             <section>
                 <h2>Description</h2>
                 <h3>{data.place.showEstablished()}</h3>

                 <h4>Serving {data.place.cuisines}</h4>

                 <div className="col d-flex justify-content-center">
                    <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">Edit</a>
                     <form action={`/places/${data.place._id}?_method=DELETE`} method="POST">
                         <button type="submit" className="btn btn-danger">Delete</button>
                     </form> 
                 </div>
                 <h2>Comments</h2>
                 <div className="row">


                 </div>
           /</section>
         </main>
     </Def> 
 )
}

module.exports = show
