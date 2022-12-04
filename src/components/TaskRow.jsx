import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskRow({ item }) {
  const { toggleCheckbox } = useGlobalContext();

  return (
    <div className="flex justify-between items-center p-2 border-gray-500 border">
      <p className="text-base sm:text-lg">{item.name}</p>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => toggleCheckbox(item.id)}
      />
    </div>
  );
}

export default TaskRow;
