import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Contact from './component/Contact/Contact.jsx';
import Auth from './component/Auth/Auth.jsx';
import Login from './component/Login/Login.jsx';
import Authprovider from './provider/Authprovider.jsx';
import Order from './component/order/Order.jsx';
import Privateroutes from './component/routes/Privateroutes.jsx';
import Profile from './component/userpro/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <Contact></Contact>
      },
      {
        path: '/auth',
        element: <Auth></Auth>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/order',
        element: <Privateroutes><Order></Order></Privateroutes>
      },
      {
        path: '/profile',
        element: <Privateroutes><Profile></Profile></Privateroutes>
      },
    
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
     <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
)
