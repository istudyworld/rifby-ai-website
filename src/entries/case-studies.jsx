import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import CaseStudies from '../pages/CaseStudies.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CaseStudies />
  </React.StrictMode>
);
