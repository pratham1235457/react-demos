import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Make sure to import your component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)