import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState(null); 
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        title: newTask,
        description: newTaskDescription,
        dueDate: newDueDate ? newDueDate.toDateString() : null, 
      };

      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTaskObj;
        setTasks(updatedTasks);
        setEditIndex(null); 
      } else {
        setTasks([...tasks, newTaskObj]);
      }

      // Reset input fields and dueDate
      setNewTask('');
      setNewTaskDescription('');
      setNewDueDate(null);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit.title);
    setNewTaskDescription(taskToEdit.description);
    setNewDueDate(taskToEdit.dueDate ? new Date(taskToEdit.dueDate) : null);
    setEditIndex(index);
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <ul className="tasks-list">
        {tasks.map((task, index) => (
          <li key={index} className="task">
            <div>
              <strong
                onClick={() => editTask(index)}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {task.title}
              </strong>
              <p
                onClick={() => editTask(index)}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {task.description}
              </p>
              {task.dueDate && <p>Due Date: {task.dueDate}</p>}
            </div>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        {/* Use DatePicker for selecting due date */}
        <DatePicker
          placeholderText="Select due date"
          selected={newDueDate}
          onChange={(date) => setNewDueDate(date)}
        />
        <button onClick={addTask}>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
