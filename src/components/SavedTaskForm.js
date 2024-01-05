// SavedTasksForm.js
import React from 'react';
import TaskDetailsForm from './TaskDetailsForm';

const SavedTasksForm = ({ savedTasks, immediateSavedTask }) => {
  return (
    <div>
      <h2>Saved Tasks Details</h2>
      {/* Check if savedTasks is defined before mapping over it */}
      {savedTasks && savedTasks.length > 0 ? (
        savedTasks.map((savedTask) => (
          <TaskDetailsForm key={savedTask.id} currentTask={savedTask} />
        ))
      ) : (
        <p>No saved tasks available</p>
      )}

      {/* Display the immediately saved task if available */}
      {immediateSavedTask && (
        <div>
          <h3>Immediately Saved Task</h3>
          <TaskDetailsForm currentTask={immediateSavedTask} />
        </div>
      )}
    </div>
  );
};

export default SavedTasksForm;
