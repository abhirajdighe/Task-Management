import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import for navigation
import { fetchTasks, deleteTask } from './api';  // Import API methods

// Utility function to convert date to IST
const formatDateToIST = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetchTasks();  // Fetch tasks from the backend
        // console.log('Fetched tasks:', response);
        setTasks(response.data);  // Assuming tasks are in the 'data' field of response
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);  // Delete the task via API
    setTasks(tasks.filter(task => task.id !== id));  // Remove the task from the state
  };

  const handleCardClick = (id) => {
    navigate(`/tasks/${id}`);  // Navigate to task detail page when card is clicked
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Task List</h1>
        <Link to="/tasks/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Task
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
              onClick={() => handleCardClick(task.id)}  // Navigate to details on card click
            >
              <h2 className="text-xl font-semibold mb-2">{task.taskList}</h2>
              <p className="text-sm text-gray-500">Updated: {formatDateToIST(task.updatedAt)}</p>  {/* Display updatedAt in IST */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();  // Prevent the card click event from triggering navigation
                    handleDelete(task.id);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;