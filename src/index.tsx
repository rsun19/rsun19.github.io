import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const ele = document.getElementById("root");

if (ele) {
  const root = ReactDOM.createRoot(ele);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
