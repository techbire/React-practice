import { useState } from "react";
function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); 
  const add=()=>{
   setTasks([...tasks, task]);
    setTask(""); 
  }
  const deleteTask = () => {
    setTasks(tasks.slice(1));
  };

  return(
    <>
    <input type="text" 
    value={task}
    onChange={(e) => setTask(e.target.value)}/>

    <button onClick={add}>Add</button>
    <button onClick={deleteTask}>Delete</button>
    <p>Lists</p>
    <ul>
      {tasks.map((t, index) => (
        
        <li key={index}>{t}    <button onClick={deleteTask}>Delete</button></li>
        
      ))}
    </ul>
    </>
   
  );
}





export default Todo;