import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const handleFirstName = (e) =>{
        
        setFirstName(e.target.value)
        if (e.target.value.length<2){
            setFirstNameError("this field must be at least 2 characters")
        }
        else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) =>{
        
        setLastName(e.target.value)
        if (e.target.value.length<2){
            setLastNameError("this field must be at least 2 characters")
        }
        else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) =>{
        
        setEmail(e.target.value)
        if (e.target.value.length<5){
            setEmailError("the field must be at least 5 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e) =>{
        
        setPassword(e.target.value)
        if (e.target.value.length<8){
            setPasswordError("the field must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) =>{
        
        setConfirmPassword(e.target.value)
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match")
        }
        else{
            setConfirmPasswordError("")
        }
    }
    const formHandler = (e)=> {
        e.preventDefault()

    }
  return (
    <>
    
    
   
    
    <form onSubmit={formHandler}>
        <p>First Name : <input  onChange={(e)=> {handleFirstName(e)}}
                value={firstName} /></p>
             <p style={{color:"red"}}>{firstNameError}</p>
        <p>Last Name : <input  onChange={(e)=> {handleLastName(e)}}
                value={lastName} /></p>
            <p style={{color:"red"}}>{lastNameError}</p>
        <p>Email : <input type="email"  onChange={(e)=> {handleEmail(e)}}
                value={email}/></p>
             <p style={{color:"red"}}>{emailError}</p>
        <p>Password :  <input type="password"  onChange={(e)=> {handlePassword(e)}}
                value={password}/></p>
             <p style={{color:"red"}}>{passwordError}</p>
        <p>Confirm password : <input type="password"  onChange={(e)=> {handleConfirmPassword(e)}}
                value={confirmPassword}/></p>
                 <p style={{color:"red"}}>{confirmPasswordError}</p>
    </form>

    </>
  )
}

export default Form