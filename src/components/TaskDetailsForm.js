// TaskDetailsForm.js
import React from 'react';

const TaskDetailsForm = ({ currentTask, previousTasks }) => {
  return (
    <div>
      <h2>Task Details</h2>
      {/* Display details of the current task */}
      {currentTask && (
        <div>
          <h3>{currentTask.title}</h3>
          <p>Priority: {currentTask.priority}</p>
          <p>Due Date: {currentTask.dueDate}</p>
          {/* Add other details as needed */}
        </div>
      )}

      {/* Display details of previous tasks */}
      <h3>Previous Tasks</h3>
      <ul>
        {previousTasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDetailsForm;
