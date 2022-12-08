import React, { useState } from 'react'
import './main.modules.css'
import Todo from '../todo/Todo'
import { v4 as uuidv4 } from 'uuid';
//classes.container


function Main() {

const todosArr = [
  {id:uuidv4(), text: 'Fitnees' },
  {id:uuidv4(), text: 'Hobby' },
  {id:uuidv4(), text: 'Playing' },
  {id:uuidv4(), text: 'Team' },
  
  
]
const [todos, setTodos] = useState(todosArr)
const[text, setText] = useState("")

const addTodo = () =>{
  if(text.trim() === "") return
  setTodos((prev) => {
    return [...prev, {id:uuidv4(), text}]
  })
  setText('')
}

  return (
    <div className='container'>
        <div className='wrapper'>
       <h2 className='title'>Todo App</h2>
       <div className='topSide'>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Todo....' className='inputTodo' />
        <button onClick={addTodo} className='addTodoBtn'>Add</button>
       </div>
       <div className='bootomSide'>
        {todos.length > 0 ? todos.map((td) =>(
          <Todo todos={todos} setTodos={setTodos} key={td.id} todo={td} />
        )) : (
          <h1 style={{fontSize:'40px',margin:'0 auto', color:"#fff", marginTop:'100px' }}>No Todos yet!</h1>
        )}
       </div>
        </div>
    </div>
  )
}

export default Main