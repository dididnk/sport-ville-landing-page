import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
 basename={
    import.meta.env.VITE_DEPLOY_TARGET === 'gh-pages'
      ? '/sport-ville-landing-page/'
      : '/'
  }
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);