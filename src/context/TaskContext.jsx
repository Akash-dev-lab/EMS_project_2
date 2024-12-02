import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskCount, setTaskCount] = useState(() => {
    // Initialize task count from localStorage or default to 0
    const savedTaskCount = localStorage.getItem('taskCount');
    return savedTaskCount ? Number(savedTaskCount) : 0;
  });

  const [acceptedTaskCount, setAcceptedTaskCount] = useState(
    tasks.filter((task) => task.status === 'accepted').length
  );

  const [failedTaskCount, setFailedTaskCount] = useState(0);

  useEffect(() => {
    // Save tasks and task count to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskCount', taskCount.toString());
  }, [tasks, taskCount]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setTaskCount((prevCount) => prevCount + 1);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    if (status === 'completed') {
      setTaskCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrement but ensure it doesn't go below 0
    }else if (status === 'accepted') {
      setAcceptedTaskCount((prevCount) => prevCount + 1);
    }
  };

  const resetTaskCount = () => {
    setTaskCount(0); // Reset the task count
    localStorage.setItem('taskCount', '0');
  };

  const getCompletedTasks = () => {
    // Return the count of completed tasks
    return tasks.filter((task) => task.status === 'completed').length;
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, taskCount, resetTaskCount, getCompletedTasks, acceptedTaskCount, setAcceptedTaskCount, failedTaskCount, setFailedTaskCount }}>
      {children}
    </TaskContext.Provider>
  );
};
