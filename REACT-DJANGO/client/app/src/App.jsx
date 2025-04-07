import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Book Website </h1>

      <div>
        <input type="text" name="" id="" placeholder="Book Title..." />
        <input type="number" name="" id="" placeholder="Release Date..." />
        <button> Add Book </button>
      </div>
    </>
  );
}

export default App
