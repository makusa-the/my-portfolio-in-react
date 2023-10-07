import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // For routing (if needed)

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your entire app with a Router for client-side routing (if needed) */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
