// TaskDetailsForm.js
import React, { useState } from 'react';

const TaskDetailsForm = ({ currentTask, previousTasks }) => {
  const [complete, setComplete] = useState(currentTask ? currentTask.status === 'Completed' : false);
  const [notes, setNotes] = useState(currentTask ? currentTask.notes : '');

  const handleCompleteToggle = () => {
    setComplete(!complete);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div>
      <h2>Task Details</h2>
      {/* Display details of the current task */}
      {currentTask && (
        <div>
          <h3>{currentTask.title}</h3>
          <p>Priority: {currentTask.priority}</p>
          <p>Due Date: {currentTask.dueDate}</p>
          <p>Status: {complete ? 'Completed' : 'Pending'}</p>

          {/* Mark as Complete Toggle */}
          <label>
            Mark as Complete:
            <input type="checkbox" checked={complete} onChange={handleCompleteToggle} />
          </label>

          {/* Additional Notes */}
          <label>
            Additional Notes:
            <textarea value={notes} onChange={handleNotesChange} />
          </label>
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
