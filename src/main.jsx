// Import React library
import React from "react";

// Import ReactDOM to render app in browser
import ReactDOM from "react-dom/client";

// Import main App component
import App from "./App";

// Import CSS styling
import "./App.css";

// Create root element
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode helps detect problems in app
  <React.StrictMode>

    {/* Render App component */}
    <App />

  </React.StrictMode>
);