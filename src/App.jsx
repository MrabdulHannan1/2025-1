import { useState } from 'react'

import './App.css'
import Header from './header.jsx'


function App() {
  const [count, setCount] = useState(0);
  return (
    
    <>

      <Header/>
      <div className="card">
      <h1>hello </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>     
    </>
  )
}

export default App
