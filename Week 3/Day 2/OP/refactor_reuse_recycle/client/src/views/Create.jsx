import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'


const Create = (props) => {
    

    const [product, setProduct] = useState({ title: "",  price: "", description: "" })
    const createProduct = (newProduct) => {
        
        console.log("SUBMITTED Product : ", product);
        axios.post("http://localhost:8000/api/product", newProduct)
            .then(serverResponse => {
                console.log(serverResponse)
                
            })
            .catch(serverError => console.log(serverError))
        setProduct({ title: "",  price: "", description: "" })
    }
  return (
    <>
    <Form product = {product} setter = {setProduct} operation ={createProduct}>Create</Form>
    
    </>
  )
}

export default Create