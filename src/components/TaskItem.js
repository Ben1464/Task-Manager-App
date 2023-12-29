import React from 'react'

function TaskItem({Task, DeleteTask, updateTask}) {

    //to remember we are editing a task
    const{isEditing, setIsEditing}= useState(false);

    //to remember we are editing a task
    const{editedTask, setIsEditedTask}= useState({...Task});

    const {id, title, priority, dueDate, category, status}= Task;

    const handleDelete = () => {
        DeleteTask(id)
    };

    const handleEdit = () => {
        setIsEditing(true)
    };

    const handleSave = () => {
        updateTask(editedTask)
        setIsEditing(false)
    };

    const handleCancel = () => {
        setIsEditing(false)
        setIsEditedTask({...Task})
    }

    const handleChange = (event) => {
        const {name, value}= event.target
        setIsEditedTask({...editedTask, [name]: value})
    }

    return (
        <div className="task">
          {isEditing ? (
            <div>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="priority"
                value={priority}
                onChange={handleChange}
              />
              <input
                type="text"
                name="dueDate"
                value={dueDate}
                onChange={handleChange}
              />
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
              />
              <input
                type="text"
                name="status"
                value={status}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            
            <div>
              <h3>{title}</h3>
              <p>{priority}</p>
              <p>{dueDate}</p>
              <p>{category}</p>
              <p>{status}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
    )      
}

export default TaskItem