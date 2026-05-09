// Import React hooks
import React, { useEffect, useState } from "react";

// Import components
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  // State that stores all tasks
  const [tasks, setTasks] = useState([]);

  // State for editing task
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage when app starts
  useEffect(() => {

    // Get saved tasks
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    // If tasks exist
    if (savedTasks) {
      setTasks(savedTasks);
    }

  }, []);

  // Save tasks whenever task list changes
  useEffect(() => {

    // Convert array to JSON and save
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);

  // Function to add task
  const addTask = (task) => {

    setTasks([
      ...tasks,

      // Create new task object
      {
        id: Date.now(), // unique id
        ...task,
        completed: false,
      },
    ]);
  };

  // Delete task function
  const deleteTask = (id) => {

    // Show confirmation popup
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    // If user clicks OK
    if (confirmDelete) {

      // Remove task from array
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // Toggle complete status
  const toggleComplete = (id) => {

    setTasks(
      tasks.map((task) =>

        // If task id matches
        task.id === id

          // Reverse completed value
          ? { ...task, completed: !task.completed }

          // Otherwise keep same task
          : task
      )
    );
  };

  // Function to start editing
  const editTask = (task) => {

    // Store selected task
    setEditingTask(task);
  };

  // Update edited task
  const updateTask = (updatedTask) => {

    setTasks(
      tasks.map((task) =>

        // Replace old task with updated task
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

    // Clear editing state
    setEditingTask(null);
  };

  return (
    <div className="container">

      {/* Main title */}
      <h1>📝 To-Do List App</h1>

      {/* Task form component */}
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />

      {/* Task list component */}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />

    </div>
  );
}

export default App;