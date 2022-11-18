import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'
import { store } from './config/store'
import './App.css';
import Api from './components/api';

function App() {

  

  return (
    <Provider store={store}>
      <Api></Api>
    </Provider>
  );
}

export default App;
