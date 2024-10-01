import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation after form submission
import { createTask, updateTask } from './api';

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
    navigate('/tasks');  // Redirect to the task list after submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h1 className="text-2xl font-bold">{editMode ? 'Edit Task' : 'Add Task'}</h1>
      <input
        type="text"
        className="border mt-4 p-2 w-full"
        placeholder="Task description"
        value={taskList}
        onChange={(e) => setTaskList(e.target.value)}
        required
      />
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
        {editMode ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;