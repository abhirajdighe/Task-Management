import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/task';

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};


// Fetch a task by ID
export const fetchTaskById = async (id) => {
  const response = await axios.get(`${API_URL}`);
  const tasksArray = response.data.data;
  if (!Array.isArray(tasksArray)) {
    throw new Error("Response data is not an array");
  }
  const task = tasksArray.find(task => task.id === parseInt(id));
  if (!task) {
    throw new Error(`Task with ID ${id} not found`);
  }

  return task;
};

// Create a task
export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

// Update a task
export const updateTask = async (id, taskData) => {
  const response = await axios.patch(`${API_URL}/${id}`, taskData);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};