import { useState } from 'react'

import './App.css'
import ColorForm from './Components/ColorForm'
import ColorBox from './Comonents/ColorBox';

function App() {
  const [color, setColor] = useState([]);
  const addNewColor = (newColor) =>{
    setColor ([...colors, newColor]);
  }
  

  return (
    <>
      <ColorForm addColor ={addNewColor}/>
      {colors.map((c, i)=>(
         <ColorBox key ={i} boxColor ={c}/>
      ))}
      <ColorBox boxColor ={color}/>
      
    </>
  )
}

export default App
