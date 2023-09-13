import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import View from './components/View'
import ViewOne from './components/ViewOne'

import Form from './components/Form'
import Edit from './views/Edit'
import Create from './views/Create'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            
            <Create/>
            <View/>
            
          </>
          
        }
         />
         <Route path='/:id' element={<ViewOne/>}/>
         <Route path='*' element={<Navigate to='/' replace/>}/>
         <Route path='/product/:id/edit'element={<Edit/>} />
      </Routes>
    </>
  )
}

export default App