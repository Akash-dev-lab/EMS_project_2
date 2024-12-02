import React, { useContext } from 'react';
import Header from './Header';
import TaskSection from './TaskSection';
import TaskList from './TaskList';
import { TaskContext } from '../context/TaskContext';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
  const { tasks } = useContext(TaskContext);

  const { auth } = useContext(AuthContext);
  const username = auth?.username;

  const userTasks = tasks.filter((task) => task.assignedTo === username);
  console.log(userTasks)

  return (
    <div className="w-screen flex flex-col justify-between h-auto p-10 max-sm:p-7">
      <Header />

      {userTasks.length === 0 ? (
        <p className="text-lg text-center text-gray-500">
          No tasks assigned to you yet.
        </p>
      ) : (
        
        <div className='mt-5 max-sm:mt-10'>
          <TaskSection />
          
          <TaskList />
        </div>
        
          )}
    </div>
  );
};

export default UserDashboard;
