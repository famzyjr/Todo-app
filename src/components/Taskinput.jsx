import React from 'react'
import {MdDelete, MdDeleteSweep} from "react-icons/md"
const Taskinput = ({task, deletTask , toggleCheck}) => {
  return (
    <li className='items'>
     <div className="items-text">
        <input type="checkbox" checked={task.checked} onChange={()=> toggleCheck(task.taskName)} />
        <p className={task.checked ? 'ischecked' : ''}>{task.taskName}</p>
     </div>
     <MdDeleteSweep className='delete-icon' onClick={() => deletTask(task.taskName)}/>
    </li >
  )
}

export default Taskinput