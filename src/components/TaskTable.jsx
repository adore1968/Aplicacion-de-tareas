import React from "react";
import { useGlobalContext } from "../context/AppContext";
import TaskRow from "./TaskRow";

function TaskTable({ showCompleted = false }) {
  const { tasks } = useGlobalContext();

  const showTaskRows = (doneValue) => {
    const newTasks = tasks.filter((item) => item.done === doneValue);
    return newTasks.map((item) => {
      return <TaskRow key={item.id} item={item} />;
    });
  };

  return (
    <div>
      <h1 className="text-lg sm:text-xl font-bold bg-blue-200 p-2 ">Tasks</h1>
      {showTaskRows(showCompleted)}
    </div>
  );
}

export default TaskTable;
