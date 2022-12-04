import React from "react";
import { useGlobalContext } from "../context/AppContext";

function TaskRow({ item }) {
  const { toggleCheckbox } = useGlobalContext();
  return (
    <div>
      <p>{item.name}</p>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => toggleCheckbox(item.id)}
      />
    </div>
  );
}

export default TaskRow;
