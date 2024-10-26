import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Resume from './routes/Resume.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
