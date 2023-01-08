const React = require('react')
const Def = require('../default')

function show(data){
    let comments = (
        <h3 className="inactive">
        No comments yet!
        </h3>
    )
    if (data.place.comments.length){
        comments = data.place.comments.map(c => {
            return (
                <div className="border col-sm-4" key={c._id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form action={`/places/${data.place._id}/comment/${c._id}?_method=DELETE`} method="POST">
                        <button type="submit" className="btn btn-danger">Delete Comment</button>
                    </form>
                </div>
            )
        })
    }
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
                 {comments}
                 <div className="row">


                 </div>
           /</section>
         </main>
     </Def> 
 )
}

module.exports = show
