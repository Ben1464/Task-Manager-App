import React from 'react';
import { Link } from 'react-router-dom';
import TaskDetailsForm from './TaskDetailsForm';

const SavedTasksForm = ({ savedTasks, immediateSavedTask }) => {
  return (
    <div>
      <h2>Saved Tasks Details</h2>
      {savedTasks && savedTasks.length > 0 ? (
        savedTasks.map((savedTask) => (
          <div key={savedTask.id}>
            <Link to={`/saved-tasks/${savedTask.id}`}>{savedTask.title}</Link>
          </div>
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
