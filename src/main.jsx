import React from "react";
import ReactDOM from "react-dom/client";
import DayPlanner from "./day-planner.jsx";

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DayPlanner />
  </React.StrictMode>
);
