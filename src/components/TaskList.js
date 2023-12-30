import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, DeleteTask, updateTask}) {
  return (
    <div className='taskList'>
      {tasks.map((task) => (
        <TaskItem key={task.id} 
        Task={task} 
        DeleteTask={DeleteTask}
         updateTask={updateTask} />
      ))}

    </div>
  )
}

export default TaskList