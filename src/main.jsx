import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ConfirmEnvio from './ConfirmEnvio.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/confirmEnvio" element={<ConfirmEnvio />} />
    </Routes>
  </BrowserRouter>,
)
