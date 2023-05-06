import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownState from './context/DropdownContext/DropdownState.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <DropdownState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DropdownState>
);
