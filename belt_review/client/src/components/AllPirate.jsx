import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const AllPirate = (props) => {
  const [pirates, setPirates] = useState([])
  const { id } = useParams();
    const navigate = useNavigate();
  const deletePirate = (id) => {
    console.log("Pirate ID = ",id, "WILL Be deleted");
    axios.delete(`http://localhost:8001/api/pirates/${id}`)
    .then(response=> {
      console.log(response)
      const filteredPirates = pirates.filter(pirate => pirate._id != id)
      setPirates(filteredPirates)
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get('http://localhost:8001/api/pirates')
      .then(serverResponse => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        setPirates(serverResponse.data)
      })
      .catch(serverError => {
        console.log("SERVER ERROR : ", serverError);
      })
  }, [])
  return (
    <div className=''>
      <div className=''>
      <h2> Pirate Crew</h2>
      <Link to = {"/pirates/new"}>Add a pirate</Link>
      </div>
      {pirates.map(pirate => <div
                key={pirate._id}
                >
                 <img style={{width:"250px"}} src="{pirate.image}" alt="{pirate.image}" srcSet="" />
                
                <h4>{pirate.name} </h4>
                <Link to = {"/pirates/" + pirate._id}><button>View Pirate</button></Link>
                <button onClick={()=>{
                deletePirate(pirate._id);
                navigate('/')}}>  Walk the Plank </button>
            </div>)}
    </div>
  )
}

export default AllPirate