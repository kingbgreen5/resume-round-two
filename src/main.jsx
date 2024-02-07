import ReactDOM from 'react-dom/client';
import React from 'react';

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import ErrorPage from './components/pages/ErrorPage';
import Resume from './components/pages/ResumePage';
import Portfolio from './components/pages/PortfolioPage';
import AboutMe from './components/pages/AboutMePage';
import Contact from './components/pages/ContactPage'


const router = createBrowserRouter([
{
  path: "/",
element: <App />,
    errorElement: <ErrorPage />,
    children: [
{
  index:true,
  element: <AboutMe />,
},
{
  path: '/portfolio',
  element: <Portfolio /> 
},
{
  path: '/resume',
  element: <Resume />
},
 {
  path: '/contact',
  element: <Contact />
} 
  ]
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

