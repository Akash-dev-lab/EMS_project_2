import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminButton = () => {
  const navigate = useNavigate();

  const goToAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <button
      onClick={goToAdminLogin}
      className="bg-green-500 max-sm:w-2/4 text-white px-4 py-3 rounded hover:bg-green-600"
    >
      Admin Login
    </button>
  );
};

export default AdminButton;
