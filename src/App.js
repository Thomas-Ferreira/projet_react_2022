import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { store } from './config/store'
import './App.css';
import { Routes } from 'react-router';
import Home from './screen/home';

function App() {

  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
