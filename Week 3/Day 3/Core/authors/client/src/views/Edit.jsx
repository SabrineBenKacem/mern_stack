import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Form from '../components/Form'

const Edit = (props) => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [author, setAuthor] = useState({ name: ""})
  const [errors, setErrors] = useState({ name: "" })
  const updateAuthor = (author) => {
    
    axios.put(`http://localhost:8000/api/authors/${id}`, author)
      .then(response => {
        console.log(response.data)
        navigate('/')
      })
      .catch(error => {
        console.log("Errors from Backend", error.response.data);
        console.log(Object.keys(error.response.data));
        const errs = { name: "" }
        for (let key of Object.keys(error.response.data)) {
          errs[key] = error.response.data[key].message
        }
        console.log(errs);
        setErrors({ ...errors, ...errs })
      })
  }
  useEffect(()=> {
    axios.get(`http://localhost:8000/api/authors/${id}`)
    .then(response => {
      console.log(response);
      setAuthor(response.data)
    })
    .catch(error => console.log(error))
  }, [id])
  return (
    <>
    <Form author={author} setter={setAuthor} errors={errors} operation={updateAuthor}>Edit this author</Form>
    </>
  )
}

export default Edit