import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && !tasks.find((item) => item.name === taskName)) {
      const newTask = {
        id: uuidv4(),
        name: taskName,
        done: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
    }
    setTaskName("");
  };

  const toggleCheckbox = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTasks(newTasks);
  };

  const clearTasksDone = () => {
    const newTasks = tasks.filter((item) => item.done !== true);
    setTasks(newTasks);
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        taskName,
        setTaskName,
        tasks,
        showCompleted,
        setShowCompleted,
        handleSubmit,
        toggleCheckbox,
        clearTasksDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
