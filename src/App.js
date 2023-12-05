// import { Fragment } from 'react';
// import Counter from './components/Counter';
// import Header from './components/Header';
// import Auth from './components/Auth'
import { LandingPage } from './landing/LandingPage';
import { CalendarPage } from './calendar/CalendarPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <LandingPage />},
      {path: '/calendar', element: <CalendarPage />},
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
