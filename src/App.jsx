import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min h-screen bg-neutral-800
    flex flex-col items-center justify-center text-center font-mono text-2xl text-white'>
      <div className='flex justify-center items-center space-x-8 mb-5'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} 
          className="h-22 w-22 animate-pulse" 
          alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} 
          className="h-22 w-22 animate-spin" 
          style={{animationDuration: "0.5s"}} 
          alt="React logo" />
        </a>
      </div>
      <h1 className='text-white text-7xl font-bold mb-5'>Vite + React</h1>
      <div className="space-y-2 mb-2">
        <button onClick={() => setCount((count) => count + 1)} 
        className='bg-blue-900 hover:bg-blue-700 rounded-lg py-1 px-2'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
