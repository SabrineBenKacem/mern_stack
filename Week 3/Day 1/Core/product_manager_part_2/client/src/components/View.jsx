import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const View = (props) => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(serverResponse => {
                console.log(serverResponse.data, "✅✅✅")
                setProduct(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "❌❌❌"))
    }, [])
    return (
        <>
             <h2>All Product</h2>
            {product.map(oneProduct => <div
                key={oneProduct._id}
                >
                     {/* <button
                     onClick={()=> navigate(`/${oneProduct._id}`)}
                    >{oneProduct.title}</button> */}
                    <Link to ={`/${oneProduct._id}`} >{oneProduct.title}</Link>
                
                
            </div>)}
        </>

    )
}

export default View