import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dropdown from './Components/Dropdown.jsx'
import { Countries } from './utils/Countries.js'

// import './index.css'
import App from './App.jsx'
import IFrame from './Components/IFrame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App />
       */}
      <Routes>
        <Route path="/" element={<Dropdown countries={Countries}/>} />
        <Route path="/dropdown" element={<Dropdown countries={Countries}/>} />
        <Route path="/iframe" element={<IFrame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
