import React, { useState } from 'react'

function ColorForm(addColor) {
    const [color, setColor] =useState ("");
    const handlSubmit =(e) =>{
      e.preventDefault();
      addColor(color)
    }
  return (
    <>
    <form onSubmit={handlSubmit}>
        <label htmlFor="color">Color</label>
        <input type="color" id='color' onChange={()=> setColor (e.target.value)}
        value={color}/>
        <button>Add color</button>

    </form>

    </>
  )
}

export default ColorForm