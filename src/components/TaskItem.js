import React from 'react'

function TaskItem({Task, DeleteTask, updateTask}) {

    //to remember we are editing a task
    const{isEditing, setIsEditing}= useState(false);

    //to remember we are editing a task
    const{editedTask, setIsEditedTask}= useState({...Task});

    const {id, title, priority, dueDate, category, status}= Task;

  return (
    <div>TaskItem</div>
  )
}

export default TaskItem