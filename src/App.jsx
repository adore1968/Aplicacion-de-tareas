import React from "react";
import { useGlobalContext } from "./context/AppContext";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import TaskTablesVisibility from "./components/TaskTablesVisibility";

function App() {
  const { showCompleted } = useGlobalContext();
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <section className="px-5 sm:px-8 flex justify-center">
        <div className="container sm:max-w-lg mt-14">
          <TaskCreator />
          <TaskTable />
          <TaskTablesVisibility />
          {showCompleted ? <TaskTable showCompleted={showCompleted} /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
