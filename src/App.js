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
  }, [tasks]);

  const removeTask = (id) => {
    const remainingTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(remainingTasks);
  };

  return (
    <div className="App">
      <Logobar />
      <Form setTasks={setTasks} tasks={tasks} />
      <Tasks tasks={tasks} remove={removeTask} />
    </div>
  );
}

export default App;
