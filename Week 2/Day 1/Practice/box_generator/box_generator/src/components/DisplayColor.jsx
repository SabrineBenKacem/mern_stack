import React from 'react'

const DisplayColor = ({box}) => {
  return (
    
    <div>
        {box.map((boxColor, idx) =>
    <div key = {idx} style={{backgroundColor: boxColor.color, width: "150px", height: "150px"}}></div>)}

      
    </div>   
    
  )
}

export default DisplayColor