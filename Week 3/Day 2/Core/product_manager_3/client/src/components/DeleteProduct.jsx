import React from 'react'
import axios from 'axios';


const DeleteProduct = (props) => {
    
    const deleteProduct = (id) => {
        console.log("ONE PRODUCT ID = ",id, "WILL Be deleted");
        axios.delete(`http://localhost:8000/api/product/`+id)
        .then(response=> {
          console.log(response)
          const filteredProduct = product.filter(oneProduct => oneProduct._id != id)
          setProduct(filteredProduct)
        })
        .catch(error => console.log(error))
      }
  return (
    <>
 <button  onClick={() => deleteProduct(props.id)}>Delete</button>
    </>
  )
}

export default DeleteProduct