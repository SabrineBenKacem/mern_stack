import React from 'react'

const View = (props) => {
  return (
    <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
        <p>Confirm password: {props.confirmPassword}</p>
    </div>
  )
}

export default View