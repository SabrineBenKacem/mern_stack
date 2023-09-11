import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductForm from './components/ProductForm'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
            
          </>
        } />
      </Routes>
    </>
  )
}

export default App