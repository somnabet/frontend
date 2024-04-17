import { useEffect, useState } from "react";

import "./App.css";
import { TaskCard } from "./components/TaskCard";
import taskApi from "./apiService/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [dummy, refresh] = useState(false);

  const getTasks = async () => {
    const tasks = await taskApi.getAllTasks();
    setTasks(tasks);
  };

  const addTaskAnSync = async () => {
    await taskApi.addTask({ title, description, dueDate });
    refresh(!dummy);
  };

  const deleteTaskAndSync = async (idToDelete) => {
    await taskApi.deleteTask(idToDelete);
    refresh(!dummy);
  };

  useEffect(() => {
    getTasks();
  }, [dummy]);

  return (
    <>
      <h1>Llista de tasques</h1>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          {...task}
          onDelete={() => deleteTaskAndSync(task._id)}
        ></TaskCard>
      ))}
      <label>Títol</label>
      <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <label>Descripció</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />
      <label>Termini</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.currentTarget.value)}
      />
      <button type="submit" onClick={addTaskAnSync}>
        Afegeix
      </button>
    </>
  );
}

export default App;
