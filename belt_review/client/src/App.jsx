import { Routes, Route } from "react-router-dom"
import AllPirate from './components/AllPirate'
import CreatePirate from './components/CreatePirate'
import ViewOne from './components/ViewOne'
import './App.css'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={
          
           
            <AllPirate />
          
        } />
        <Route path='/pirates/new' element ={<CreatePirate/>}/>
        <Route path='pirates/:id' element ={<ViewOne/>}/>
      </Routes>
    </>
  )
}

export default App
