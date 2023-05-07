import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

if (!window.location.href.includes("/#/"))
  window.location.href = "/#" + window.location.pathname;
