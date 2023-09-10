import { useState } from 'react'
import './App.css'

function App() {

  const [pokemon,setPokemon] = useState([])
  const fetchAPI = () =>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then(response=> response.json())
  .then(jsonResponse=> {
    console.log("RESPONSE FROM API :",jsonResponse.results)
    setPokemon(jsonResponse.results)
    
  })
  .catch(error=> console.log(error))}

  

  return (
    <>
    
       
        <button onClick={fetchAPI}>Fetch Pokemon API</button>
       
        
       
        <ul>
          {pokemon.map((onePokemon,i) => 
            <li key={i}>{onePokemon.name}</li>
          )}
          </ul>
        
        

   
      
    </>
  )
}


export default App