import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductForm from './components/ProductForm'
import View from './components/View'
import ViewOne from './components/ViewOne'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
            <View/>
            
          </>
          
        }
         />
         <Route path='/:id' element={<ViewOne/>}/>
      </Routes>
    </>
  )
}

export default App