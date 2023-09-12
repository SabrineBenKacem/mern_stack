import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProductForm from './components/ProductForm'
import View from './components/View'
import ViewOne from './components/ViewOne'
import ProductEdit from './components/ProductEdit'
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
         {/* <Route path='*' element={<Navigate to='/' replace/>}/> */}
         <Route element={<ProductEdit/>} path='/product/:id/edit'/>
      </Routes>
    </>
  )
}

export default App