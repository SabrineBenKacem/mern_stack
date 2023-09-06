import React, {useState} from 'react'
import View from './View';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const formHandler = (event) => {

    }
  return (
    <>
    <form onSubmit={formHandler}>
        <p>First Name : <input  onChange={(e)=> {setFirstName(e.target.value)}}
                value={firstName} /></p>
        <p>Last Name : <input  onChange={(e)=> {setLastName(e.target.value)}}
                value={lastName} /></p>
        <p>Email : <input type="email"  onChange={(e)=> {setEmail(e.target.value)}}
                value={email}/></p>
        <p>Password :  <input type="password"  onChange={(e)=> {setPassword(e.target.value)}}
                value={password}/></p>
        <p>Confirm password : <input type="password"  onChange={(e)=> {setConfirmPassword(e.target.value)}}
                value={confirmPassword}/></p>
    </form>
    
    <View firstName ={firstName} lastName = {lastName} email = {email} password ={password} confirmPassword ={confirmPassword}/>
    
    
    </>
  )
}

export default Form