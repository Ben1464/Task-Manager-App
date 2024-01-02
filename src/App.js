// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import TaskDetailsForm from './components/TaskDetailsForm'; // Import the new component
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/tasks')
      .then(response => setTasks(response.data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:3000/tasks', task)
      .then(response => {
        const newTask = { ...response.data, status: 'Pending' };
        setTasks([...tasks, newTask]);
        setEditingTask(null);
        setCurrentTask(newTask);
        setShowDetailsForm(true);
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/tasks/${taskId}`)
      .then(() => setTasks(tasks.filter(t => t.id !== taskId)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find(t => t.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    axios.put(`http://localhost:3000/tasks/${editingTask.id}`, updatedTask)
      .then(response => {
        setTasks(tasks.map(t => (t.id === response.data.id ? { ...response.data, status: t.status } : t)));
        setEditingTask(null);

        // Set the current task and show the details form
        setCurrentTask(response.data);
        setShowDetailsForm(true);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={editingTask ? updateTask : addTask} task={editingTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={editTask} />
      <Footer />

      {/* Render the TaskDetailsForm when showDetailsForm is true */}
      {showDetailsForm && <TaskDetailsForm currentTask={currentTask} previousTasks={tasks} />}
    </div>
  );
};

export default App;
