import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Errorpage from '../Pages/Errorpage';
import Menu from '../Pages/Menu';
import OurShop from '../Pages/OurShop';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SecretRoute from '../Components/SecretRoute';
import PrivateRoute from './PrivateRoute';
import DashBoard from '../Layouts/DashBoard';
import Cart from '../Pages/Dashboard/Cart';
import AllUsers from '../Pages/Dashboard/AllUsers';
import AddItems from '../Pages/Dashboard/AddItems';
import AdminRoute from './AdminRoute';
import Payment from '../Pages/Dashboard/Payment';


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/shop/:category",
        element: <OurShop></OurShop>
      },
      {
        path: "/secret",
        element: <PrivateRoute><SecretRoute></SecretRoute></PrivateRoute>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [

      // normal user routes
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>
      },

      //admin only routes
      {
        path: "/dashboard/allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "/dashboard/addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  
  {
    path: "*",
    element: <Errorpage></Errorpage>
  }
]);

export default Routes;