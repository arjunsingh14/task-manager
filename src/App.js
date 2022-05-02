import "./App.scss";
import Logobar from "./components/Logobar";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const removeTask = (id) => {
    const remainingTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <div className="App">
      <Logobar />
      <Form setTasks={setTasks} tasks={tasks} />
      {tasks.length !== 0 ? (<Tasks tasks={tasks} remove={removeTask}/>) : <h1 id="no-task">No tasks</h1>}
    </div>
  );
}

export default App;
