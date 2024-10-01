import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTaskById, updateTask } from './api'; // Import the API methods

const TaskDetail = () => {
  const { id } = useParams();  // Get the task ID from the route
  const [task, setTask] = useState(null);  // State to hold the task details
  const [taskList, setTaskList] = useState('');  // State for the task description (to be updated)
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await fetchTaskById(id);  // Fetch the task from the backend
        console.log('Fetched task:', response); // Log the fetched task
        setTask(response);  // Set the fetched task in the state
        setTaskList(response.taskList);  // Pre-fill the form with the task description
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    loadTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { taskList };
    
    console.log('Updating task with ID:', id);  // Log the ID being used for the update
    
    try {
      await updateTask(id, updatedTask);  // Update the task via API
      navigate('/tasks');  // Redirect to the task list after updating
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };  

  if (!task) return <div>Loading...</div>;  // Loading state

  return (
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">{task.taskList}</h1>  {/* Display taskList in h1 */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="task">
              Task Description
            </label>
            <input
              type="text"
              id="task"
              value={taskList}
              onChange={(e) => setTaskList(e.target.value)}
              className="border border-gray-300 rounded-lg w-full px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;