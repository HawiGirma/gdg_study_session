import { useState } from "react";
import "./App.css";

const Task = ({ task, index, toggleComplete, removeTask }) => {
  return (
    <div className="task">
      <span
        className={`task-text ${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(index)}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(index)} className="remove-btn">
        &times;
      </button>
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="title">Simple To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="task-input"
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
