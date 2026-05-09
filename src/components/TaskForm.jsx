// Import React hooks
import React, { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {

  // State for title input
  const [title, setTitle] = useState("");

  // State for description input
  const [description, setDescription] = useState("");

  // State for validation error
  const [error, setError] = useState("");

  // Fill form when editing task
  useEffect(() => {

    // If editing task exists
    if (editingTask) {

      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }

  }, [editingTask]);

  // Form submit function
  const handleSubmit = (e) => {

    // Prevent page reload
    e.preventDefault();

    // Validation
    if (!title || !description) {

      setError("All fields are required!");
      return;
    }

    // If editing existing task
    if (editingTask) {

      updateTask({
        ...editingTask,
        title,
        description,
      });

    } else {

      // Add new task
      addTask({
        title,
        description,
      });
    }

    // Clear form fields
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

      {/* Title input */}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description input */}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Show validation error */}
      {error && <p className="error">{error}</p>}

      {/* Submit button */}
      <button type="submit">

        {/* Change button text */}
        {editingTask ? "Update Task" : "Add Task"}

      </button>

    </form>
  );
}

export default TaskForm;