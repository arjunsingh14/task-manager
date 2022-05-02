import React from "react";
import { useState } from "react";

const Form = ({setTasks, tasks}) => {

  const [task, setTask] = useState({taskName: "", date: ""});
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({...task, [name]:value});

  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (task.taskName && task.date){
      const newTask = {...task, id: new Date().getTime().toString()}
      setTasks([...tasks, newTask]);
      setTask({ taskName: "", date: "" }); 
      console.log(tasks)
    }
    else {
      console.log("error");
    }
  }



  return (
    <article className="task-article">
      <h2 id="form-label">Enter a Task</h2>
      <form action="" id="task-form" onSubmit={onSubmit} autoComplete="off">
        <div className="input-sect">
          <label htmlFor="taskName">Task: </label>
          <input type="text" id="taskName" name="taskName" value={task.taskName} onChange={onChange}/>
        </div>
        <div className="input-sect">
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" value = {task.date} onChange={onChange} name="date" />
        </div>
        <div>
            <button type="submit" >Submit</button>
        </div>
      </form>
    </article>
  );
};

export default Form;
