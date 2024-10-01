import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';  
import { fetchTasks, deleteTask } from './api';  

import homeImage from '../assets/homePageImage.jpg';

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
        const response = await fetchTasks();  
        setTasks(response.data);  
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);  
    setTasks(tasks.filter(task => task.id !== id));  
  };

  const handleCardClick = (id) => {
    navigate(`/tasks/${id}`);  
  };

  return (
    <div 
      className="container mx-auto p-4 h-screen" 
      style={{ 
        backgroundImage: `url(${homeImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: 0.8,
      }}
    >
      <div className="bg-white bg-opacity-0 rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Tasks</h1>
          <Link to="/tasks/new" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 text-center w-full md:w-auto mt-4 md:mt-0">
            Add Task
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => handleCardClick(task.id)}  
              >
                <div className="flex-grow flex flex-col justify-center relative">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 mt-4 pt-4 overflow-hidden text-ellipsis whitespace-nowrap">{task.taskList}</h2>
                  <p className="text-sm text-gray-500 absolute top-2 right-2">
                    Updated: {formatDateToIST(task.updatedAt)}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();  
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
    </div>
  );
};

export default TaskList;
