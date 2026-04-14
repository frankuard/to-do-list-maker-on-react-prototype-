import { useState } from 'react'
import Header from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    <div className="container"> 
      <div className='addTodo'>
        <h2>  </h2> 
        <input type="text" />
        <button></button>


        

      </div>
    </div>
      
    </>
  )
}

export default App
