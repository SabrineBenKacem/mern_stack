import React from 'react'

export const Todo = ({todoList, setTodoList}) => {
    const deleteTodo = (id) => {
        
        const filteredTodoList = todoList.filter((todo,idx)=> idx != id)
        setTodoList(filteredTodoList)
      }
  return (
    <div>
    {todoList.map((todo, idx)=><div key={idx}>
        <h4>
            
            <span
            style={
                todo.isCompleted?
                {textDecoration:'line-through'}:
                {textDecoration:'none'}
            }
            >{todo.content}</span>
            <input type="checkbox" id={idx}
            checked={todo.isCompleted} 
            onChange={(e)=>{
                const updatedList =  [...todoList]
                updatedList [idx].isCompleted = !updatedList [idx].isCompleted
                setTodoList(updatedList)
            }}
            />
            <button onClick={()=>deleteTodo(idx)}
            >Delete</button>
        </h4>
    </div>)}
</div>
  )
}
