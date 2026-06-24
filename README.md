# 📝 Managing State in React – To-Do List Application

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📌 Project Overview

This project is a complete **To-Do List Application** built with **React** and **Vite** as part of the **Managing State in React Checkpoint**.

The application demonstrates how to effectively manage state in React using:

- `useState`
- `useEffect`
- Component communication through props
- Conditional rendering
- Dynamic UI updates
- Form handling
- Local Storage persistence

Users can create, update, complete, and delete tasks while maintaining their data even after refreshing the browser.

---

# 🎯 Learning Objectives

This project focuses on understanding and applying:

✅ React State Management

✅ React Hooks (`useState`, `useEffect`)

✅ Component-Based Architecture

✅ Parent-Child Communication

✅ Controlled Forms

✅ CRUD Operations

✅ Data Persistence with Local Storage

✅ Dynamic Rendering

✅ Conditional Styling

---

# 🚀 Features

### Task Management

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Undo completed tasks

### Validation

- Prevent empty task submissions
- Display validation messages

### Persistent Storage

- Save tasks automatically in Local Storage
- Reload saved tasks when the application starts

### User Experience

- Clean interface
- Instant updates
- Confirmation before deleting tasks
- Dynamic button labels during editing

---

# 🏗️ Project Structure

```text
Checkpoint-Managing-State-in-React-main
│
├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   │
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 📂 Component Breakdown

---

## App.jsx

The central component of the application.

### Responsibilities

- Stores all tasks in state
- Handles CRUD operations
- Manages editing state
- Synchronizes data with Local Storage
- Passes data and functions to child components

### Main States

```javascript
const [tasks, setTasks] = useState([]);
const [editingTask, setEditingTask] = useState(null);
```

### Main Functions

| Function | Purpose |
|-----------|----------|
| addTask() | Add new task |
| deleteTask() | Remove task |
| toggleComplete() | Complete/undo task |
| editTask() | Select task for editing |
| updateTask() | Save edited task |

---

## TaskForm.jsx

Handles task creation and updating.

### Features

- Controlled inputs
- Form validation
- Dynamic button text
- Editing support

### State Variables

```javascript
title
description
error
```

### Validation

```javascript
if (!title || !description)
```

Prevents users from submitting incomplete tasks.

---

## TaskList.jsx

Responsible for rendering all tasks.

### Features

- Displays all tasks
- Displays empty state message
- Maps task data into TaskItem components

```javascript
tasks.map((task) => (
  <TaskItem />
))
```

---

## TaskItem.jsx

Represents a single task.

### Features

- Displays title and description
- Complete task
- Edit task
- Delete task

### Dynamic Styling

```javascript
task.completed
  ? "task-item completed"
  : "task-item"
```

Completed tasks receive a different visual style.

---

# 🔄 State Flow

```text
User Action
     │
     ▼
TaskForm
     │
     ▼
App.jsx
     │
     ▼
Update State
     │
     ▼
TaskList
     │
     ▼
TaskItem
```

The state is managed centrally inside `App.jsx` and passed down through props.

---

# 💾 Local Storage Integration

The application automatically saves tasks to the browser.

### Load Tasks

```javascript
useEffect(() => {
  const savedTasks =
    JSON.parse(localStorage.getItem("tasks"));

  if (savedTasks) {
    setTasks(savedTasks);
  }
}, []);
```

### Save Tasks

```javascript
useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);
```

### Benefits

- No backend required
- Data persists after page refresh
- Better user experience

---

# 🧠 React Concepts Demonstrated

## useState

Used to manage:

- Tasks
- Editing mode
- Form values
- Validation errors

Example:

```javascript
const [tasks, setTasks] = useState([]);
```

---

## useEffect

Used for:

### Initial Data Loading

```javascript
useEffect(() => {
  ...
}, []);
```

### Saving Data

```javascript
useEffect(() => {
  ...
}, [tasks]);
```

---

## Props

Parent-to-child communication.

Example:

```javascript
<TaskForm
  addTask={addTask}
  editingTask={editingTask}
  updateTask={updateTask}
/>
```

---

## Conditional Rendering

Example:

```javascript
{
  editingTask
    ? "Update Task"
    : "Add Task";
}
```

---

## List Rendering

Example:

```javascript
tasks.map((task) => (
  <TaskItem key={task.id} />
))
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-react-app.git
```

---

## 2. Navigate to Project

```bash
cd Checkpoint-Managing-State-in-React-main
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

## 5. Open Browser

```text
http://localhost:5173
```

---

# 📦 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

# 🖥️ Expected User Workflow

### Add Task

1. Enter title
2. Enter description
3. Click Add Task

---

### Edit Task

1. Click Edit
2. Modify information
3. Click Update Task

---

### Complete Task

1. Click Complete
2. Task becomes marked as completed

---

### Undo Completion

1. Click Undo
2. Task returns to active state

---

### Delete Task

1. Click Delete
2. Confirm deletion
3. Task removed permanently

---

# 🔥 Technical Highlights

- React 19
- Vite 8
- Functional Components
- React Hooks
- Local Storage Persistence
- Reusable Components
- Clean State Management
- Responsive Structure
- Scalable Architecture

---

# 📈 Future Improvements

Possible enhancements include:

- Task categories
- Task priorities
- Due dates
- Search functionality
- Filter completed tasks
- Dark mode
- Drag and drop sorting
- Backend integration
- Authentication system
- Cloud database synchronization

---

# 🏆 Checkpoint Requirements Covered

| Requirement | Status |
|------------|---------|
| React State Management | ✅ |
| useState Hook | ✅ |
| useEffect Hook | ✅ |
| Add Tasks | ✅ |
| Edit Tasks | ✅ |
| Delete Tasks | ✅ |
| Complete Tasks | ✅ |
| Component Communication | ✅ |
| Form Validation | ✅ |
| Local Storage Persistence | ✅ |

---

# 👨‍💻 Author

**Managing State in React Checkpoint**

Built using:

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

This project demonstrates practical state management techniques in React through a fully functional To-Do List application and serves as a strong foundation for more advanced React projects.

---
⭐ This project useful, consider giving it a star and continuing to expand its functionality.
