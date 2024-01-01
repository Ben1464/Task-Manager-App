import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask }) {
  // Check if tasks is undefined or null
  if (!tasks) {
    return null; // or you can return a loading indicator or an empty list
  }

  return (
    <div className='taskList'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
      ))}
    </div>
  );
}

export default TaskList;
