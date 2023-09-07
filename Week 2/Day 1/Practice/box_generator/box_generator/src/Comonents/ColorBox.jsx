import React from 'react'

function ColorBox(props) {
  return (
    <>
        <div>
            style ={{
                backgroundColor: props.boxColor,
                width: "100px"
                height: "100px" 
            }}
        </div>
    </>
  )
}

export default ColorBox