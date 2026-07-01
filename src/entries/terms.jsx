import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/global.css';
import Terms from '../pages/Terms.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Terms />
  </React.StrictMode>
);
