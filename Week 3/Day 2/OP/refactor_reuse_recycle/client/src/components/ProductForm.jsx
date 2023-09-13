// import React, { useState } from 'react'
// import axios from 'axios'

// const ProductForm = (props) => {
//     const [product, setProduct] = useState({ title: "",  price: 0, description: "" })
//     const fromHandler = (e) => {
//         e.preventDefault()
//         console.log("SUBMITTED Product : ", product);
//         axios.post("http://localhost:8000/api/product", product)
//             .then(serverResponse => console.log(serverResponse))
//             .catch(serverError => console.log(serverError))
//         setProduct({ title: "",  price: 0, description: "" })
//     }
//     return (
//         <>
//              <h2>Product Manager</h2>
            
//             <form onSubmit={fromHandler}>
//                 <p>Title  : <input type="text"
//                     onChange={(e) => setProduct({ ...product, title: e.target.value })}
//                     value={product.title}
//                 /></p>
                
//                 <p>Price  : <input type="number"
//                     onChange={(e) => setProduct({ ...product, price: e.target.value })}
//                     value={product.price}
//                 /></p>
//                 <p>Description: <input type="text"
//                     onChange={(e) => setProduct({ ...product, description: e.target.value })}
//                     value={product.description}
//                 /></p>
//                 <button>Create</button>
//             </form>
//             </>

//     )
// }

// export default ProductForm