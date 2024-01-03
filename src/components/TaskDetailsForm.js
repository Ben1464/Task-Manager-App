// TaskDetailsForm.js
import React, { useState, useEffect } from 'react';

const TaskDetailsForm = ({ currentTask, previousTasks, isSavedTask }) => {
  const [complete, setComplete] = useState(currentTask ? currentTask.status === 'Completed' : false);
  const [notes, setNotes] = useState(currentTask ? currentTask.notes : '');

  useEffect(() => {
    setComplete(currentTask ? currentTask.status === 'Completed' : false);
    setNotes(currentTask ? currentTask.notes : '');
  }, [currentTask]);

  const handleCompleteToggle = () => {
    setComplete(!complete);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div>
      <h2>{isSavedTask ? 'Saved Task Details' : 'Task Details'}</h2>
      {currentTask && (
        <form>
          <label>
            Task Title:
            <input type="text" value={currentTask.title} readOnly />
          </label>
          <label>
            Priority:
            <input type="text" value={currentTask.priority} readOnly />
          </label>
          <label>
            Due Date:
            <input type="text" value={currentTask.dueDate} readOnly />
          </label>
          <label>
            Status:
            <input type="text" value={complete ? 'Completed' : 'Pending'} readOnly />
          </label>

          <label>
            Mark as Complete:
            <input type="checkbox" checked={complete} onChange={handleCompleteToggle} disabled />
          </label>

          <label>
            Additional Notes:
            <textarea value={notes} onChange={handleNotesChange} readOnly />
          </label>
        </form>
      )}

      {isSavedTask && previousTasks && previousTasks.length > 0 && (
        <div>
          <h3>Previous Tasks</h3>
          <ul>
            {previousTasks.map((task) => (
              <li key={task.id}>{task.title} - {task.status}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskDetailsForm;
