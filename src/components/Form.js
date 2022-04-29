import React from "react";

const Form = () => {
  return (
    <article className="task-article">
      <h2 id="form-label">Enter a Task</h2>
      <form action="" id="task-form">
        <div className="input-sect">
          <label htmlFor="task">Task: </label>
          <input type="text" id="task" name="task" />
        </div>
        <div className="input-sect">
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" name="date" />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </article>
  );
};

export default Form;
