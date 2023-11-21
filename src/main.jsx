import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './assets/components/Footer.jsx'
import Header from './assets/components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='container'>
      <Header />
      <App />
    </div>    
    
    <Footer />
    
  </React.StrictMode>,
)
