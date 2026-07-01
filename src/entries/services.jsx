import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import Services from '../pages/Services.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Services />
  </React.StrictMode>
);
