import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthorList = (props) => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([])
  const deleteAuthor = (id) => {
    console.log("Author ID = ",id, "WILL Be deleted");
    axios.delete(`http://localhost:8000/api/authors/${id}`)
    .then(response=> {
      console.log(response)
      const filteredAuthors = authors.filter(author => author._id != id)
      setAuthors(filteredAuthors)
      navigate('/')
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(serverResponse => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        setAuthors(serverResponse.data)
      })
      .catch(serverError => {
        console.log("SERVER ERROR : ", serverError);
      })
  }, [])
  
  return (
    <>
    <h1>Favorite Authors</h1>
    <Link to ={'/authors/new'}>Add an author</Link>
    <p>We have quotes by:</p>
    <table className="table table-striped border table-bordered">
          <thead>
            <tr>
              <th>Authors</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author._id}>
                <th>{author.name}</th>
                <th>
                  
                  <Link
                    to={`/authors/edit/${author._id}`}
                    className="btn btn-info mx-2"
                  >
                    Edit
                  </Link>
                 
                  <button
                    className="btn btn-info mx-2"
                    onClick={() => deleteAuthor(author._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  )
}

export default AuthorList