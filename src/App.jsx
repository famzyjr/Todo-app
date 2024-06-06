
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Taskinput from './components/Taskinput';
import Stast from './components/Stast';


function App() {
const [toDoList, setToDOList] = useState([])
 
const addTask =(taskName)=>{
const newTask = {taskName, checked: false};
setToDOList([...toDoList, newTask])
}
function deletTask(deletTaskName){
  setToDOList(toDoList.filter(task => task.taskName !== deletTaskName))
}
{console.log(toDoList)}
 function toggleCheck(taskName){
  setToDOList((prevToDOList) => prevToDOList.map(task => task.taskName === taskName ? {...task, checked: !task.checked}: task )
 )
 }
  return (
  <>
    <div className="container">
     <h1>Task Master</h1>
    <Todo addTask={addTask}/>
    <div className='toDoList'>
      <span>To do</span>
      <ul className="list-items">
      {toDoList.map((task, Key) => (
        <Taskinput task={task} key={Key} deletTask={deletTask} toggleCheck={toggleCheck}/>
      ))}
      </ul>
      {toDoList.length === 0 ? <p className='notify'>You are done</p> : null}
    </div>
    </div>
    <Stast toDoList={toDoList}/>
    </>
  );
}

export default App;
