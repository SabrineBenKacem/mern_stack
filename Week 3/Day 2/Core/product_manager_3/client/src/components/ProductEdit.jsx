import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProductEdit = (props) => {
    const {id}= useParams();
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
    const formHandler = (e) => {
        e.preventDefault()
        console.log("SUBMITTED Product : ", product);
        axios.put('http://localhost:8000/api/product/'+id,product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))
       
    }
   
    return (
        <>
             <h2>Product Manager</h2>
            
            <form onSubmit={formHandler}>
                <p>Title  : <input type="text"
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    value={product.title}
                /></p>
                
                <p>Price  : <input type="number"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    value={product.price}
                /></p>
                <p>Description: <input type="text"
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    value={product.description}
                /></p>
                <button>Edit</button>
            </form>
            </>

    )
}

export default ProductEdit