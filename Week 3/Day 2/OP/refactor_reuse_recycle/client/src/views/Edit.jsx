import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = (props) => {
    const {id}= useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({ title: "",  price: "", description: "" })
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+ id)
          .then(serverResponse => {
            console.log("SERVER RESPONSE : ", serverResponse.data);
            setProduct(serverResponse.data)
          })
          .catch(serverError => {
            console.log("SERVER ERROR : ", serverError);
          })
      }, []);
    const updateProduct = (product) => {
        
        console.log("SUBMITTED Product : ", product);
        axios.put('http://localhost:8000/api/product/'+id,product)
            .then(serverResponse =>{ console.log(serverResponse)
            navigate('/')
            })
            .catch(serverError => console.log(serverError))
    }
  return (
    <>
    <Form product ={product} setter ={setProduct} operation ={updateProduct}>Update</Form>
    </>
  )
}

export default Edit