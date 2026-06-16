import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar>
        <App />
      </Navbar>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
)
