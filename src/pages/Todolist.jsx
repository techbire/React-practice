import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState(""); // single task input
  const [tasks, setTasks] = useState([]); // list of tasks

  // Add task
  const addTask = () => {
    if (task.trim() === "") return; // ignore empty tasks
    setTasks([...tasks, task]);
    setTask(""); // clear input
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Reset all tasks
  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <button onClick={resetTasks}>Reset</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
