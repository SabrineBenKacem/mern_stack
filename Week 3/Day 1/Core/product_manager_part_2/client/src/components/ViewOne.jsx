import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
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
            
            
                <h4>{product.title} </h4>
                <h4>{product.price} </h4>
                <h4>{product.description} </h4>
           
        </>

    )
}

export default ViewOne