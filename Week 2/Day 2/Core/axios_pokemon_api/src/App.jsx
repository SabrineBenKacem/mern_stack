import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [pokemon,setPokemon] = useState([])
  const axiosAPI = () =>{
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  
  .then(response=> {
    console.log("RESPONSE FROM API :",response.data.results)
    setPokemon(response.data.results)
    
  })
  .catch(error=> console.log(error))}

  

  return (
    <>
    
       
        <button onClick={axiosAPI}>Fetch Pokemon </button>
       
        
       
        <ul>
          {pokemon.map((onePokemon,i) => 
            <li key={i}>{onePokemon.name}</li>
          )}
          </ul>
        
        

   
      
    </>
  )
}


export default App