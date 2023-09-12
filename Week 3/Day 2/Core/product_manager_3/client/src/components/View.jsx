import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DeleteProduct from './DeleteProduct'

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

    // const deleteProduct = (id) => {
    //     console.log("ONE PRODUCT ID = ",id, "WILL Be deleted");
    //     axios.delete(`http://localhost:8000/api/product/${id}`)
    //     .then(response=> {
    //       console.log(response)
    //       const filteredProduct = product.filter(oneProduct => oneProduct._id != id)
    //       setProduct(filteredProduct)
    //     })
    //     .catch(error => console.log(error))
    //   }
    return (
        <>
             <h2>All Product</h2>
            {product.map(oneProduct => <div
                key={oneProduct._id}
                >
                     {/* <button
                     onClick={()=> navigate(`/${oneProduct._id}`)}
                    >{oneProduct.title}</button> */}
                    <Link to ={`/${oneProduct._id}`} >{oneProduct.title} </Link>
                    <DeleteProduct id={oneProduct._id}/>
                
                
            </div>)}
        </>

    )
}

export default View