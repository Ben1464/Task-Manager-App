import React, { useState } from 'react';

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const { id, title, priority, dueDate, category, status } = task;

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask({ ...task });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div className={`task ${priority.toLowerCase()}`}>
      {isEditing ? (
        <div>
          <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
          <select name="priority" value={editedTask.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} />
          <input type="text" name="category" value={editedTask.category} onChange={handleChange} />
          <input type="text" name="status" value={editedTask.status} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p className={`priority ${priority.toLowerCase()}`}>{priority}</p>
          <p>Due Date: {dueDate}</p>
          <p>{category}</p>
          <p>{status}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
