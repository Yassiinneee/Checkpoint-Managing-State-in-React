// Import TaskItem component
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) {

  return (
    <div className="task-list">

      {/* If there are no tasks */}
      {tasks.length === 0 ? (

        <p>No tasks available</p>

      ) : (

        // Loop through tasks
        tasks.map((task) => (

          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;