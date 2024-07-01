

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Components/Context';

ReactDOM.render(
  <React.StrictMode><ContextProvider>
    <App /></ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
