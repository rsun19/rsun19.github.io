import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource-variable/source-serif-4";
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
