import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/scss/style.scss';
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
  const {worker} = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
