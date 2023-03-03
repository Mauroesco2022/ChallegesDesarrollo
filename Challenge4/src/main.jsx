import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import GiftExpertApp from './GiftExpertApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
    <GiftExpertApp/>
  </React.StrictMode>,
)
