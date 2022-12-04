import React from "react";
import { useGlobalContext } from "./context/AppContext";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import TaskTablesVisibility from "./components/TaskTablesVisibility";

function App() {
  const { showCompleted } = useGlobalContext();
  return (
    <div>
      <section>
        <div>
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
