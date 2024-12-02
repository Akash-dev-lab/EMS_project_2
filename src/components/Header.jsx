import React from 'react';
import LogoutButton from '../pages/Logout';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { auth } = useContext(AuthContext);
  const username = auth.username

  return (
    <div className="flex justify-between items-center px-9 py-6 max-sm:py-0 max-sm:px-4 ">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className='text-3xl font-semibold'> {username}👋 </span>
      </h1>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;