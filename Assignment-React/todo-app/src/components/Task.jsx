import { useState } from "react";

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // 保存编辑
  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md my-2">
      {isEditing ? (
        <input
          className="border p-2 flex-1"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button className="bg-blue-500 text-white px-3 py-1 ml-2 rounded" onClick={handleSave}>
          保存
        </button>
      ) : (
        <>
          <button
            className={`px-3 py-1 ml-2 rounded ${
              task.completed ? "bg-green-500" : "bg-gray-500"
            } text-white`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.completed ? "已完成" : "完成"}
          </button>
          <button className="bg-yellow-500 text-white px-3 py-1 ml-2 rounded" onClick={() => setIsEditing(true)}>
            编辑
          </button>
          <button className="bg-red-500 text-white px-3 py-1 ml-2 rounded" onClick={() => deleteTask(task.id)}>
            删除
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
