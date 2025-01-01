import { useState } from 'react'
import axios from "axios";
import './App.css'
import Weather from './Weather.jsx'


function App() {
  const [count, setCount] = useState(0);
  return (
    
    <>
       <Weather/>
    </>
  )
}

export default App
