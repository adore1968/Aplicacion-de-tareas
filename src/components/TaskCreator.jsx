import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskCreator() {
  const { taskName, setTaskName, handleSubmit } = useGlobalContext();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskCreator;
