import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTaskById, updateTask } from './api';
import detailImage from '../assets/detailBackground.jpg';
import Loading from './Loading';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [taskList, setTaskList] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await fetchTaskById(id);
        setTask(response);
        setTaskList(response.taskList);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    loadTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { taskList };
    
    try {
      await updateTask(id, updatedTask);
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (!task) return <Loading/>;

  return (
    <div className="relative flex justify-center items-center min-h-screen p-4">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${detailImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
      <div 
        className="bg-white bg-opacity-90 rounded-lg p-6 md:p-8 w-full max-w-2xl relative z-10 flex flex-col md:flex-row shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" // Added hover effect
      >
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-center mb-6">Task Details</h2>
          <p className="text-lg">{taskList}</p>
          <p className="text-sm text-gray-500 mt-4">
            Updated: {new Date(task.updatedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h2 className="text-2xl font-bold text-center mb-6">Update Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
    </div>
  );
};

export default TaskDetail;