import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [priority, setPriority] = useState(task ? task.priority : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [category, setCategory] = useState(task ? task.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, priority, dueDate, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Priority:</label>
      <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />

      <label>Due Date:</label>
      <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;