import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudentProvider from "./context/StudentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>
);