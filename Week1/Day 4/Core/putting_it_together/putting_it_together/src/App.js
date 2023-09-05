import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  const people = [
    {first_name:"Doe",last_name:"Jane", age:45, hair_color:"Black"}, 
    {first_name:"Smith",last_name:"John", age:88, hair_color:"Brown"}];
  return (
    <div className="App">


      {people.map((people, index)=> <PersonCard key ={index} people={people}/>)}
    </div>
  );
}

export default App;
