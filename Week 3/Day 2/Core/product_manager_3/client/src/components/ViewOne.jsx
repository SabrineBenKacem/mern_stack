import React, { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'

const ViewOne = (props) => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(serverResponse => {
                console.log(serverResponse.data, "✅✅✅")
                setProduct(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "❌❌❌"))
    }, [])
    return (
        <>
            
            
                <h4>Title: {product.title} </h4>
                <h4>Price (£): {product.price} </h4>
                <h4>Description: {product.description} </h4>
                <Link to={`/product/${product._id}/edit`} >Edit</Link>
           
        </>

    )
}

export default ViewOne