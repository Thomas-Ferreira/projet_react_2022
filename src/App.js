import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { store } from './config/store'
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
