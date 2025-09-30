import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-md rounded-md overflow-hidden">
        {/* Bagian kiri (gambar/placeholder) */}
        <div className="w-[500px] h-[400px] bg-gray-300 flex items-center justify-center text-gray-600 text-2xl">
          600 × 500
        </div>

        {/* Bagian kanan (form login) */}
        <div className="w-[400px] p-8 flex flex-col justify-center">
          <h2 className="text-center text-4xl font-bold mb-6">LOGIN</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
