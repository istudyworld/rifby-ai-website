import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import Contact from '../pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);
