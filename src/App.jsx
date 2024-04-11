import "./App.css";
import { useState } from "react";

function App() {
  let taskList = [
    { id: 1, name: "Wake up before Fajr", done: false },
    { id: 2, name: "Pray all prayers at time", done: false },
    { id: 3, name: "Read Quran", done: false },
    { id: 4, name: "Gift parents something", done: false },
    { id: 5, name: "Complete Quran", done: false },
    { id: 6, name: "Hajj & Umrah", done: false },
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleTaskDone = (id) => {
    const updatedTaskList = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTaskList);
  };

  const hideEntry = () => {
    setHidden(!hidden);
  };

  const handleNewEntry = (value) => {
    if (value != "")
      setTasks([...tasks, { id: tasks.length + 1, name: value, done: false }]);
    setEntry("");
  };

  let [tasks, setTasks] = useState(taskList);
  let [hidden, setHidden] = useState(true);
  let [entryVal, setEntry] = useState("");

  return (
    <div className="container">
      <div className="header">
        <h2>{days[new Date().getDay()]}</h2>
      </div>
      <div className={hidden ? "hidden" : "" + "new-task"}>
        <input
          type="text"
          placeholder="Enter new task"
          className="entry"
          value={entryVal}
          onChange={(event) => setEntry(event.target.value)}
          onKeyDown={(event) => {
            event.key === "Enter" && handleNewEntry(event.target.value);
          }}
        />
        <button
          className="enter"
          onClick={() => {
            handleNewEntry(entryVal);
          }}
        >
          <img src="tick.svg" />
        </button>
      </div>
      <div className="tasks">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="checkbox"
                checked={task.done}
                onChange={() => handleTaskDone(task.id)}
              />
              <span className={task.done ? "done" : ""}>{task.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-btn">
        <button className="open-entry" onClick={hideEntry}>
          <img src="plus.svg" />
        </button>
      </div>
    </div>
  );
}

export default App;
