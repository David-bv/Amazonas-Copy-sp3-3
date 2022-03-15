import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/App.css'

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

