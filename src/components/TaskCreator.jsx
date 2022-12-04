import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskCreator() {
  const { taskName, setTaskName, handleSubmit } = useGlobalContext();
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex items-center mb-5">
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-[80%] p-2 text-base sm:text-lg rounded text-black"
      />
      <button
        type="submit"
        className="w-[20%] p-2 bg-blue-500 rounded-r text-base sm:text-lg"
      >
        Save Task
      </button>
    </form>
  );
}

export default TaskCreator;
