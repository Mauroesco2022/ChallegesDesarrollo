import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import GiftExpertApp from './GiftExpertApp'
import {MultipleCustomHooks} from './Components/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
