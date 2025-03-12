import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Components/main.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>
);
