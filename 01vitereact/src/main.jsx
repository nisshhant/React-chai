import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './App.jsx'
import Button from './Button.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button/>
    <Counter/>

  </React.StrictMode>,
)
