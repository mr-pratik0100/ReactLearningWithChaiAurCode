import React from 'react'

import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")


  const [updateId, setUpdateId] = useState(null); // New state to hold the ID of the task being updated
  // const [updateText, setUpdateText] = useState(''); // New state to hold the updated task text




  const addTask = () => {
    if (newTask.trim() != "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  const toggleTask = (id) => {
    const updateTask = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    setTasks(updateTask)
  }

  const remove = (id) => {
    const rempvet = tasks.filter((task) => task.id !== id)
    setTasks(rempvet)
  }


  //chat gpt code

  const updateTask = (id) => {
    setUpdateId(id);
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) alert("not found")
    console.log(taskToUpdate);
    setNewTask(taskToUpdate.text)
    // setUpdateText(taskToUpdate.text);
  };


  // --------------

  const handleUpdate = () => {
    if (!updateId) alert("Id not found")

    const arr = [{ id: 1, text: 'abc' }, { id: 2, text: 'zyw' }, { id: 3, text: 'iop' }]
    const at = arr.map((i) => i.id === 2 ? { ...i, text: "hhh" } : i);

    const ap = tasks.map((i) => i.id === updateId ? { ...i, text: newTask } : i)
    setTasks(ap)
    setUpdateId(null)
    setNewTask('')
    console.log(ap);
  };

  return (
    <>
      <h1>To Do List</h1>
      <input style={{ margin: "5px" }} type="text" placeholder='Enter Your List' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button style={{ backgroundColor: 'yellow' }} onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input style={{ margin: '3px' }} type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />

            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button style={{ margin: '5px', backgroundColor: 'red' }} onClick={() => remove(task.id)}>Delete</button>


            {updateId === task.id ? (
              <button style={{ margin: '5px', backgroundColor: 'green' }} onClick={handleUpdate}>Update</button>
            ) : (
              <button style={{ margin: '5px', backgroundColor: 'gray' }} onClick={() => updateTask(task.id)}>Edit</button>
            )}


            {/* <button>Update</button> */}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App