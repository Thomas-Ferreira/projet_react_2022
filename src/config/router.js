import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Header from '../components/header';
import Api from '../reducers/api';
import Home from '../screen/home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/api",
      element: <Api />
    }
  ]);

export default router