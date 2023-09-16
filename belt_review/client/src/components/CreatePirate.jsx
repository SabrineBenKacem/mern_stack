import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const CreatePirate = (props) => {
  const navigate = useNavigate()
  const [pirate, setPirate] = useState({ name: "", image: "", numberOfTreasure: "", catchPhrase: "",  crewPosition:"", 
  hook: true, eyePatch:true, pegLeg:true })
  const [errors, setErrors] = useState({ name: "", image: "", numberOfTreasure: "", catchPhrase: "",  crewPosition:"" })
  const createPirate = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8001/api/pirates/new', pirate)
      .then(response => {
        console.log(response.data)
        navigate('/')
      })
      .catch(error => {
        // console.log("Errors from Backend", error.response.data);
        // console.log(Object.keys(error.response.data));
        const errs = { name: "", image: "", numberOfTreasure: "", catchPhrase: "",  crewPosition:"" }
        for (let key of Object.keys(error.response.data)) {
          // console.log(key, "*****", error.response.data[key].message);
          errs[key] = error.response.data[key].message
        //   // setErrors({...errors,[key]:error.response.data[key].message})
        }
        console.log("ERRORS ", errs);
        setErrors({ ...errors, ...errs })
      })
  }
  return (
    <>
    <div>
        <h1>Add Pirate</h1>
        <Link to = {"/"}>Crew Board</Link>
    </div>
    <form onSubmit={createPirate}>
        <div className="form-group mb-3">
          <label htmlFor="">Pirate Name</label>
          <input type="text" className="form-control"
            onChange={(e) => setPirate({ ...pirate, name: e.target.value })}
            value={pirate.name}
          />
          {errors.name && <span className='text-danger h5'> {errors.name}</span>}
        </div>
        <div className="form-group mb-3">
        <p>Image<input type="text" 
            onChange={(e)=> setPirate({...pirate,image:e.target.value})}
            value={pirate.image}
            /></p>
          {errors.image && <span className='text-danger h5'> {errors.image}</span>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Number Of Treasure</label>
          <input type="number" className="form-control"
            onChange={(e) => setPirate({ ...pirate, numberOfTreasure: e.target.value })}
            value={pirate.numberOfTreasure}
          />
          {errors.numberOfTreasure && <span className='text-danger h5'> {errors.numberOfTreasure}</span>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Catch Phrase</label>
          <input type="text" className="form-control"
            onChange={(e) => setPirate({ ...pirate, catchPhrase: e.target.value })}
            value={pirate.catchPhrase}
          />
          {errors.catchPhrase && <span className='text-danger h5'> {errors.catchPhrase}</span>}
        </div>
        <div className="form-group mb-3">
        <label>Crew Position:</label>
        <select value={pirate.crewPosition} onChange={(e) => setPirate({...pirate,crewPosition:e.target.value})}>
          <option value="">Select Position</option>
          <option value="Captain">Captain</option>
          <option value="First Mate">First Mate</option>
          <option value="Quarter Master">Quarter Master</option>
          <option value="Boatswain">Boatswain</option>
          <option value="Powder Monkey">Powder Monkey</option>
        </select>
        {errors.crewPosition && <span className='text-danger h5'> {errors.crewPosition}</span>}

        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className='form-check-input mx-3'
            onChange={(e) => setPirate({ ...pirate, hook: e.target.checked })}
            value={pirate.hook}
          />
          <label className='form-check-label'> Hook ?</label>
        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className='form-check-input mx-3'
            onChange={(e) => setPirate({ ...pirate, eyePatch: e.target.checked })}
            value={pirate.eyePatch}
          />
          <label className='form-check-label'> Eye Patch ?</label>
        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className='form-check-input mx-3'
            onChange={(e) => setPirate({ ...pirate, pegLeg: e.target.checked })}
            value={pirate.pegLeg}
          />
          <label className='form-check-label'> Peg Leg ?</label>
        </div>
        <div className='text-center'>
          <button className='btn btn-outline-primary w-50'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default CreatePirate