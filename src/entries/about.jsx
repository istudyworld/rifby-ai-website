import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import About from '../pages/About.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);
