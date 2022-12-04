import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskTablesVisibility() {
  const { showCompleted, setShowCompleted, clearTasksDone } =
    useGlobalContext();

  const handleDelete = () => {
    if (window.confirm("Are you sure to clean up the tasks done?")) {
      clearTasksDone();
    }
  };

  return (
    <div className="my-5 bg-gray-500 flex justify-between p-2 items-center">
      <input
        type="checkbox"
        checked={showCompleted}
        onChange={() => setShowCompleted(!showCompleted)}
      />
      <h2 className="text-lg sm:text-xl">Show tasks done</h2>
      <button
        onClick={handleDelete}
        className="text-base sm:text-lg py-1 px-2.5 bg-red-500 rounded inline-block"
      >
        Clear
      </button>
    </div>
  );
}

export default TaskTablesVisibility;
