import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = (props) => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState({ name: "" })
    const [errors, setErrors] = useState({ name: ""})
    const createAuthor = (newAuthor) => {
        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then(response => {
          console.log(response.data)
          navigate('/')
        })
        .catch(error => {
          const errs = { name: "" }
          for (let key of Object.keys(error.response.data)) {
            errs[key] = error.response.data[key].message
          }
          setErrors({ ...errors, ...errs })
        })
    }
  return (
    <>
    <Form author={author} setter={setAuthor} errors={errors} operation={createAuthor}>Add a new author</Form>
    </>
  )
}

export default Create