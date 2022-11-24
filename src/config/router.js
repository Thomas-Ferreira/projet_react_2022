import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../screen/home';
import Single from '../screen/single';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/:id",
      element: <Single />
    }
  ]);

export default router