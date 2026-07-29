import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {

  if (tasks.length === 0)

   return(

<div className="empty">

<h3>No Task Available</h3>

<p>Add your first task.</p>

</div>

)

  return (

    <div>

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />

      ))}

    </div>

  );
}

export default TaskList;