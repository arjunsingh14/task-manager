import "./App.scss";
import Logobar from "./components/Logobar";
import Form from "./components/Form";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const generateId = () => {
    return new Date().getTime().toString() * Math.random();
  };

  const [tasks, setTasks] = useState([
    { id: generateId(), taskName: "Wash the dishes", date: "2022-05-01" },
    
  ]);

  const removeTask = (id) => {
    const remainingTasks = tasks.filter(elem => elem.id !== id);
    setTasks(remainingTasks);
  }


  return (
    <div className="App">
      <Logobar />
      <Form setTasks = {setTasks} tasks = {tasks}/>
      <Tasks tasks={tasks} remove={removeTask}/>
    </div>
  );
}

export default App;
