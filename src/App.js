import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from JSON Server when the component mounts
    axios.get('http://localhost:3001/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    // Add task to JSON Server
    axios.post('http://localhost:3001/tasks', task)
      .then(response => {
        setTasks([...tasks, response.data]);
        setEditingTask(null);
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (taskId) => {
    // Delete task from JSON Server
    axios.delete(`http://localhost:3001/tasks/${taskId}`)
      .then(() => setTasks(tasks.filter(task => task.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    // Update task on JSON Server
    axios.put(`http://localhost:3001/tasks/${editingTask.id}`, updatedTask)
      .then(response => {
        setTasks(tasks.map(task => (task.id === response.data.id ? response.data : task)));
        setEditingTask(null);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={editingTask ? updateTask : addTask} task={editingTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      <Footer />
    </div>
  );
};

export default App;