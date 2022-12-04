import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskTablesVisibility() {
  const { showCompleted, setShowCompleted, clearTasksDone } =
    useGlobalContext();
  return (
    <div>
      <input
        type="checkbox"
        checked={showCompleted}
        onChange={() => setShowCompleted(!showCompleted)}
      />
      <h2>Show tasks done</h2>
      <button onClick={() => clearTasksDone()}>Clear</button>
    </div>
  );
}

export default TaskTablesVisibility;
