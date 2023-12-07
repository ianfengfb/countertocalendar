import { Link, useLoaderData } from "react-router-dom";

function CalendarPage () {

    const data = useLoaderData();
    const calendars = data.data;
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

export async function loader() {
    const response = await fetch('http://127.0.0.1:8000/api/calendar');
  
    if (!response.ok) {
        return {isError: true, message: 'An error occurs.'}
    } else {
        return response;
    }
}