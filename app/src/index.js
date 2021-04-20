import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import './assets/index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
