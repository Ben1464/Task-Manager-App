import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [priority, setPriority] = useState(task ? task.priority : 'Low');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, priority, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor = "title">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor = "priority">Priority:</label>
      <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />

      <label htmlFor = "dueDate">Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

      <label htmlFor = "category">Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />


      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
