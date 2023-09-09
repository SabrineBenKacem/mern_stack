import React, {useState} from 'react'

export const Form = ({todoList, setTodoList}) => {
    const [todo, setTodo] = useState({ content: "", isCompleted:false})
    const createList = (e)=>{
        e.preventDefault()
        
        
        setTodoList([...todoList, todo])
        setTodo({ content: "" ,isCompleted:false})
    }
  return (
    <div >
    <form onSubmit={createList} >
        <input onChange={(e) => setTodo({ ...todo, content: e.target.value })}
                 value={todo.content}/>
       
        <button >Add</button>
    </form>
    </div>
  )
}
