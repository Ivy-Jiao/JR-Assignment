import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  // 从 localStorage 读取任务
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // 任务更新时存储到 localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 添加任务
  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  // 切换任务完成状态
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  // 删除任务
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // 编辑任务
  const editTask = (taskId, newText) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, text: newText } : task));
  };

  // 任务筛选
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">任务清单</h1>

      <div className="flex mb-4">
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="输入任务..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded" onClick={addTask}>
          添加
        </button>
      </div>

      <div className="mb-4 flex justify-between">
        <button className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`} onClick={() => setFilter("all")}>
          全部
        </button>
        <button className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-300"}`} onClick={() => setFilter("active")}>
          未完成
        </button>
        <button className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-300"}`} onClick={() => setFilter("completed")}>
          已完成
        </button>
      </div>

      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

