import React from 'react';
import Header from './Header';
import CreateTask from './CreateTask';
import AllTask from './AllTask';

const AdminDashboard = () => {

  return (
    <div className='h-screen w-full flex flex-col p-7 max-sm:p-0'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
