import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownState from './context/DropdownContext/DropdownState.jsx'
import FormState from './context/FormContext/FormState.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DropdownState>
      <FormState>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FormState>
    </DropdownState>
  </BrowserRouter>
);
