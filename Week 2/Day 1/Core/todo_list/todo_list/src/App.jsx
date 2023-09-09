import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './Components/Form'
import { Todo } from './Components/Todo'

function App() {
  const [todoList, setTodoList] = useState([
    {content:"Get the Python Belt",isCompleted:true},
    {content:"Get the MERN Belt",isCompleted:false},
    {content:"Get the Java Belt",isCompleted:false}
  ])

  return (
    <>
      <Form todoList = {todoList} setTodoList={setTodoList}/>
      <Todo todoList = {todoList} setTodoList={setTodoList}/>
    </>
  )
}

export default App
