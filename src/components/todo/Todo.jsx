import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import  './todo.moduls.css'

const Todo = ({todos, setTodos, todo}) =>{

const deleteTodo = (todo) => {
setTodos((prev) =>{
  return prev.filter((td) => {
    return td.id !== todo.id
  })
})
}



  return (
    <div className='container1'>
      <div className='wrapper1'>
        <p className='text1'>{todo.text}</p>
        <AiFillDelete onClick={() => deleteTodo(todo)} className='deleteIcon1'/>
      </div>
    </div>
  )
}

export default Todo