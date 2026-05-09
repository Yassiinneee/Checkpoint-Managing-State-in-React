function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {

  return (

    // Add completed class dynamically
    <div
      className={
        task.completed
          ? "task-item completed"
          : "task-item"
      }
    >

      {/* Task information */}
      <div>

        <h3>{task.title}</h3>

        <p>{task.description}</p>

      </div>

      {/* Buttons section */}
      <div className="buttons">

        {/* Complete button */}
        <button onClick={() => toggleComplete(task.id)}>

          {task.completed ? "Undo" : "Complete"}

        </button>

        {/* Edit button */}
        <button onClick={() => editTask(task)}>

          Edit

        </button>

        {/* Delete button */}
        <button onClick={() => deleteTask(task.id)}>

          Delete

        </button>

      </div>

    </div>
  );
}

export default TaskItem;