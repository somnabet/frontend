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

const updateTask = async (id, taskData) => {
  const response = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(taskData),
    headers: { "Content-type": "application/json" },
  });
  const updatedTask = await response.json();
  return updatedTask;
};

const updateTaskStatus = async (id, status) => {
  const response = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: { "Content-type": "application/json" },
  });
  const updatedTask = await response.json();
  return updatedTask;
};

export default {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
};
