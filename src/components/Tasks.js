import React from 'react'

const Tasks = ({tasks, remove}) => {
  return (
    <article id='tasks'>
        <h2 id="task-header">Tasks</h2>
        {tasks.map((element)=>{
            return (
            <div key={element.id} className="task">
                <h2>{element.taskName}</h2>
                <h4>{element.date}</h4>
                <button type='button' onClick={()=>remove(element.id)}>Done</button>
            </div>
            )
        })}
    </article>
  )
}

export default Tasks