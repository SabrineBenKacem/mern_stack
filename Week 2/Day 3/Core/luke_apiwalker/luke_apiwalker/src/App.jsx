// import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import FormComponent from './components/FormComponent'
import PeopleComponent from './components/PeopleComponent'
import PlanetComponent from './components/PlanetComponent'

function App() {

  return (
    <>
    
      
      
      <br />
      <FormComponent/>
      
      <Routes>
        
        
        <Route path='/people/:id' element={<PeopleComponent/>}/>
        <Route path='/planet/:id' element={<PlanetComponent/>}/>
        
      </Routes> 

    </>
  )
}

export default App