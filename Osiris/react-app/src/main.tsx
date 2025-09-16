
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main.html" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
