import React from 'react'

const PersonCard = (props) => {

  return (
    <>
      <h2>{props.person.first_name}, {props.person.last_name}</h2>
      <p>Age: {props.person.Age}</p>
      <p>Hair Color: {props.person.hair_color}</p>
    </>
  )
}

export default PersonCard