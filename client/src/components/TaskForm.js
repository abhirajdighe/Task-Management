import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { createTask, updateTask } from './api';
import taskImage from '../assets/taskImage.jpg'; // Ensure this path is correct

const TaskForm = ({ task, editMode }) => {
  const [taskList, setTaskList] = useState(task ? task.taskList : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { taskList };

    if (editMode) {
      await updateTask(task.id, taskData);
    } else {
      await createTask(taskData);
    }
    navigate('/');  // Redirect to the task list after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-200">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex-none w-1/2 relative">
          <img 
            src={taskImage}
            alt="Task Management"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105" // Hover effect on image
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-0" />
        </div>
        <form 
          onSubmit={handleSubmit} 
          className="flex-grow flex flex-col justify-center p-8"
        >
          <h1 className="text-2xl font-bold text-center mb-6">{editMode ? 'Edit Task' : 'Add Task'}</h1>
          <input
            type="text"
            className="border border-gray-300 mt-4 p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out hover:border-blue-500" // Added hover effect on input
            placeholder="Task description"
            value={taskList}
            onChange={(e) => setTaskList(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="mt-4 bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition duration-200 ease-in-out" // Added hover effect on button
          >
            {editMode ? 'Update Task' : 'Create Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;