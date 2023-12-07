// import { Fragment } from 'react';
// import Counter from './components/Counter';
// import Header from './components/Header';
// import Auth from './components/Auth'
import { LandingPage } from './landing/LandingPage';
import { CalendarPage, loader as calendarsLoader } from './calendar/CalendarPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import CalendarDetails, {loader as calendarLoader} from './calendar/CalendarDetails';
import Counter from './components/Counter';

const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <LandingPage />},
      {path: '/calendar', 
      children: [
        {index: true, element: <CalendarPage />, loader: calendarsLoader},
        {path: ':calendarId', element: <CalendarDetails />, loader: calendarLoader},
      ]
      },
      {path: '/counter', 
      children: [
        {index: true, element: <Counter />},
      ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
