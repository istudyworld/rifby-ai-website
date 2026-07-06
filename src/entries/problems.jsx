import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import Problems from '../pages/Problems.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Problems />
  </React.StrictMode>
);
