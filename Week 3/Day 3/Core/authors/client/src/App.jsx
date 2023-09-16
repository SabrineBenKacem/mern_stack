import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthorList from './components/AuthorList'
import Create from './views/Create'
import Edit from './views/Edit'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        
        <Route path='/' element={<AuthorList/>}/>
        
        <Route path='/authors/edit/:id' element={<Edit/>}/>
       
        <Route path='/authors/new' element={<Create/>}/>
        
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </>
  )
}

export default App
