import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import Errorpage from '../Pages/Errorpage';
  
const Routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
    {
      path: "*",
      element: <Errorpage></Errorpage>
    }
  ]);

export default Routes;