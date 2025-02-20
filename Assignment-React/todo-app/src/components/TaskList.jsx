import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">暂无任务</p>
      )}
    </div>
  );
};

export default TaskList;
