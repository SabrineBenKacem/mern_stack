import React from 'react'

const Form = (props) => {
    const {product, setter, operation} = props
    const formHandler = (e) => {
        e.preventDefault()
        console.log(product);
        operation(product)
    }
  return (
    <>
     <h2>Product Manager</h2>
            
            <form onSubmit={formHandler}>
                <p>Title  : <input type="text"
                    onChange={(e) => setter({ ...product, title: e.target.value })}
                    value={product.title}
                /></p>
                
                <p>Price  (£): <input type="number"
                    onChange={(e) => setter({ ...product, price: e.target.value })}
                    value={product.price}
                /></p>
                <p>Description: <input type="text"
                    onChange={(e) => setter({ ...product, description: e.target.value })}
                    value={product.description}
                /></p>
                <button>{props.children}</button>
            </form>
    </>
  )
}

export default Form