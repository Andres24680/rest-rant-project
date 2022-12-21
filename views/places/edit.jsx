const React = require('react')
const Def = require('../default.jsx')

function edit_form(data){
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${data.id}?_method=PUT`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" type="text" name="name" id="name" defaultValue={data.place.name} required/>   
                        </div>                    
                        <div className="form-group col-sm-6">
                                <label htmlFor="pic">Place Picture</label>
                                <input className="form-control" type="url" name="pic" id="pic" defaultValue={data.place.pic} />   
                        </div>                    
                        <div className="form-group col-sm-6">
                                <label htmlFor="city">City</label>
                                <input className="form-control" type="text" name="city" id="city" defaultValue={data.place.city}/>    
                        </div>
                        <div className="form-group col-sm-6">
                                <label htmlFor="state">State</label>
                                <input className="form-control" type="text" name="state" id="state" defaultValue={data.place.state} />    
                        </div>
                        <div className="form-group col-sm-6">
                                <label htmlFor="cuisines">Cuisines</label>
                                <input className="form-control" type="text" name="cuisines" id="cuisines" defaultValue={data.place.cuisines} required/>    
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="founded">Founded Year</label>
                            <input className="form-control" type="number" name="founded" id="founded" defaultValue={data.place.founded}/>    
                        </div>   
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save Changes" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
