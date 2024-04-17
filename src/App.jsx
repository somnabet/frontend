import { useEffect, useState } from "react";
import { TaskCard } from "./components/TaskCard";
import taskApi from "./apiService/taskApi";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButton";

function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("ALL");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [dummy, refresh] = useState(false);

  const getTasks = async () => {
    const tasks = await taskApi.getAllTasks();
    setTasks(tasks);
  };

  const addTaskAndSync = async () => {
    await taskApi.addTask({ title, description, dueDate });
    refresh(!dummy);
  };

  const deleteTaskAndSync = async (idToDelete) => {
    await taskApi.deleteTask(idToDelete);
    refresh(!dummy);
  };

  const updateTaskAndSync = async (idToUpdate, updatedTaskData) => {
    await taskApi.updateTask(idToUpdate, updatedTaskData);
    refresh(!dummy);
  };

  const completeTaskAndSync = async (idToComplete) => {
    await taskApi.updateTaskStatus(idToComplete, "completed");
    refresh(!dummy);
  };

  useEffect(() => {
    getTasks();
  }, [dummy]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") {
      return true;
    }
    return task.status === filter;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA - dateB;
  });

  return (
    <>
      <div className="container">
        <TaskForm
          setTitle={setTitle}
          setDescription={setDescription}
          setDueDate={setDueDate}
          addTaskAnSync={addTaskAndSync}
        />
        <div className="list">
          <FilterButtons onFilterChange={setFilter} />
          {sortedTasks.map((task) => (
            <TaskCard
              key={task._id}
              {...task}
              onDelete={() => deleteTaskAndSync(task._id)}
              onUpdate={(updatedTaskData) =>
                updateTaskAndSync(task._id, updatedTaskData)
              }
              onComplete={() => completeTaskAndSync(task._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
