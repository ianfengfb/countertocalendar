import { Link } from "react-router-dom";

function CalendarPage () {

    const calendars = [
        {
            id: 1,
            name: 'Calendar 1',
            description: 'This is calendar 1'
        },
        {
            id: 2,
            name: 'Calendar 2',
            description: 'This is calendar 2'
        }
    ];
    return (
        <>
            <div className="container">
                <div className="row">
                    {calendars.map(item => 
                    <div className="col-4 mt-3" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <Link to={item.id.toString()} className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export {CalendarPage};