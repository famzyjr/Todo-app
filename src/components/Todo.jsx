import React from 'react'
import { useState } from 'react'

function Todo({addTask}) {
  const [task, setTask] = useState('')

  function handleAddTask(e){
   e.preventDefault()
   if(task.trim() === '') return;
   addTask(task)
   setTask('')
  }

  return (

    <div>
      <form className='inputField' onSubmit={handleAddTask }>
        <input type="text" placeholder='Add Item ' value={task} onChange={(e)=> setTask(e.target.value)}/>
        {console.log(task)}
        <button>+</button>
      </form>
    </div>
  )
}

export default Todo