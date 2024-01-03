import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const initialFormState = {
    title: '',
    priority: 'Low',
    dueDate: '',
    category: ''
  };

  const [formData, setFormData] = useState(task ? task : initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Reset the form fields to their initial values
    setFormData(initialFormState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="title">Task:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="priority">Priority:</label>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label htmlFor="dueDate">Due Date:</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />


      <div>
        <label htmlFor="category">Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div>
        <button type="submit">Save</button>
      </div>

    </form>
  );
};

export default TaskForm;
