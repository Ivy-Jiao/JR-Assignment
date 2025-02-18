import React, { useState, useEffect } from "react";
import Task from "./components/Task";
import "./styles.css";

const App = () => {
  // 任务列表（从 localStorage 读取）
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  // 输入框内容
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all"); // all, completed, uncompleted

  // 监听 tasks 变化，存入 localStorage
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
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 编辑任务
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  // 过滤任务
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>📝 任务清单</h1>

      {/* 输入框 */}
      <div className="input-container">
        <input
          type="text"
          placeholder="添加新任务..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>➕ 添加</button>
      </div>

      {/* 过滤按钮 */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>全部</button>
        <button onClick={() => setFilter("completed")}>已完成</button>
        <button onClick={() => setFilter("uncompleted")}>未完成</button>
      </div>

      {/* 任务列表 */}
      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <p>暂无任务</p>
        ) : (
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
