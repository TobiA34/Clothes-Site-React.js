import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap JS (with Popper)
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
