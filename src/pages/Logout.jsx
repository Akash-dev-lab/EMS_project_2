// components/LogoutButton.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({userType}) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 font-medium text-white px-5 py-2 rounded max-sm:py-3 max-sm:px-8 max-sm:text-base"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
