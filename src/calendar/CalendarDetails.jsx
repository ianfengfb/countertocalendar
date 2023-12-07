import { useLoaderData, useParams } from "react-router-dom";

function CalendarDetails () {
    const data = useLoaderData();

    const calendar = data.data;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="offset-2 col-8 d-flex flex-column justify-content-center align-items-center">
                    <div>{calendar.name}</div>
                    <div>{calendar.description}</div>
                </div>
            </div>
        </div>
    )
}

export default CalendarDetails;

export async function loader ({request, params}) {
    const id = params.calendarId;
    const response = await fetch('http://127.0.0.1:8000/api/calendar/' + id);

    if (!response.ok) {
        return {isError: true, message: 'An error occurs.'}
    } else {
        return response;
    }
}