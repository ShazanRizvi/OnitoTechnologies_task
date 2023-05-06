import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Global/Navbar'
import UserRegistration from './components/User Registration form/UserRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Appbar/>
    <UserRegistration/>
    </>
  )
}

export default App
