import React from 'react';
import TaskDetailsForm from './TaskDetailsForm';

const SavedTaskDetails = ({ match, savedTasks }) => {
  const taskId = match.params.id;
  const savedTask = savedTasks.find(task => task.id === parseInt(taskId));

  return (
    <div>
      <h2>Saved Task Details</h2>
      {savedTask ? (
        <TaskDetailsForm currentTask={savedTask} />
      ) : (
        <p>Task not found</p>
      )}
    </div>
  );
};

export default SavedTaskDetails;