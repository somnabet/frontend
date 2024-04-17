const baseUrl = "http://localhost:3000";

const getAllTasks = async () => {
  const response = await fetch(`${baseUrl}/tasks`);
  const tasks = await response.json();
  return tasks;
};

const addTask = async (taskData) => {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    body: JSON.stringify(taskData),
    headers: { "Content-type": "application/json" },
  });
  const newlyCreatedTask = await response.json();
  return newlyCreatedTask;
};

const deleteTask = async (id) => {
  const response = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
  const message = await response.json();
  return message;
};

export default { getAllTasks, addTask, deleteTask };
