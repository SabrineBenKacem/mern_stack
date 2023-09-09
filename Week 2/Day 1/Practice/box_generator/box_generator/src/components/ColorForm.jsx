import React, {useState} from 'react'

const ColorForm = (props) => {
    const [box, setBox] = useState({ color: "ffffff"})
    const createBox = (e)=>{
        e.preventDefault()
        
        props.addBox(box)
        setBox({ color: "" })
    }
  return (
    <>
      <div >
            <form onSubmit={createBox} >
                <p>Color  : <input type="color" name="color" id="color" 
                 onChange={(e) => setBox({ ...box, color: e.target.value })}
                 value={box.color}/>
                    
                </p>
               
                <button >Add</button>
            </form>
            </div>
    </>
  )
}

export default ColorForm