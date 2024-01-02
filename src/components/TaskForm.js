import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [priority, setPriority] = useState(task ? task.priority : 'Low');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [category, setCategory] = useState(task ? task.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, priority, dueDate, category });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="title">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="priority">Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label htmlFor="dueDate">Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

      <label htmlFor="category">Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Health</option>
        {/* Add more options as needed */}
      </select>

      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
