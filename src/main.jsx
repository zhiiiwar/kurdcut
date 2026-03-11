import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n' // Initialize i18n
import { BrowserRouter } from 'react-router-dom'

// Note: Ensure your public/css/styles.css is still being loaded, either by importing here or in index.html. We will serve it publicly or import here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
