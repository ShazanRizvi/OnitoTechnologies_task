import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Global/Navbar'
import UserRegistration from './components/User Registration form/UserRegistration'
import { Routes,Route } from 'react-router-dom'
import RegisteredContacts from './components/Registered Contacts/RegisteredContacts'

function App() {

  return (
    <>
      <Appbar />
      <Routes>
        <Route exact path="/" element={<UserRegistration />} />
        <Route exact path="/registeredcontacts" element={<RegisteredContacts/>} />
      </Routes>
    </>
  );
}

export default App
