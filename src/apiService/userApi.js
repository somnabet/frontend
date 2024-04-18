const baseUrl = "http://localhost:3000";

const getAllUsers = async () => {
  const response = await fetch(`${baseUrl}/users`);
  const users = await response.json();
  return users;
};

const addUser = async (userData) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  });
  const newlyCreatedUser = await response.json();
  return newlyCreatedUser;
};

export default {
  getAllUsers,
  addUser,
};
