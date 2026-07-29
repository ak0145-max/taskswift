function TaskItem({ task, deleteTask }) {

  return (

    <div className="task">

      <span>{task.text}</span>

   <button
className="delete"
onClick={()=>deleteTask(task.id)}
>

Delete

</button>

    </div>

  );
}

export default TaskItem;