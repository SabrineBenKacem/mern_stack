import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ColorForm from './Components/ColorForm'
import DisplayColor from './Components/DisplayColor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [box, setBox] = useState([])
  const addBox = (newBox) => {
    
    setBox([...box,newBox])
  }

  return (
    <>
    <ColorForm addBox={addBox} />
    
    <DisplayColor  box = {box}/>
    </>
  )
}

export default App
