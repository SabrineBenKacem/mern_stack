import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Form = (props) => {
    console.log("FORM PROPS",props);
    const {author, setter, operation, errors} = props
    const formHandler = (e) => {
        e.preventDefault()
        console.log(author);
        operation(author)
    }
    return (
        <>
        <h1>Favorite authors</h1>
        <Link to ={'/'}>Home</Link>
        <p>{props.children}</p>
            <form onSubmit={formHandler}>
                <div className="form-group mb-3">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setter({ ...author, name: e.target.value })}
                        value={author.name}
                    />
                    {errors.name && <span className='text-danger h5'> {errors.name}</span>}
                </div>
               
                
                <div className='text-center'>
                    <button className='btn btn-outline-primary w-50'>Submit</button>
                    <Link to ={'/'}><button className='btn btn-outline-primary w-50'>Cancel</button></Link>
                </div>
            </form>
        </>
    )
}

export default Form