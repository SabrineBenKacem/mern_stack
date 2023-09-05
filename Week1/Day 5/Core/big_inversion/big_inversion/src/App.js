import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  
  const person = [
    {first_name:"Doe",last_name:"Jane", age:45, hair_color:"Black"}, 
    {first_name:"Smith",last_name:"John", age:88, hair_color:"Brown"},
    {first_name:"fillmore",last_name:"Millard", age:50, hair_color:"Brown"},
    {first_name:"Smith",last_name:"Maria", age:62, hair_color:"Brown"}];
  return (
    <div className="App">
      
    
      {person.map((person, index)=> <PersonCard key ={index} person={person}/>)}
    </div>
  );
}

export default App;