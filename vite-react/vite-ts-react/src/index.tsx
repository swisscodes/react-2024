import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoute from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
