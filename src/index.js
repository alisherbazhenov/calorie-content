import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css';
import "./css/index.css";
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
