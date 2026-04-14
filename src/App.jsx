import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div className="container">
        <div className="bg-red-600"> Hey I am Red</div>
      </div>
    </>
  )
}

export default App
