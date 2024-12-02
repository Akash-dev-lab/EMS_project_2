import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../index.css';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import AdminButton from '../components/AdminButton';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    userType: 'user',
  });
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload

    const { username, password, userType } = credentials;

    // Input validation
    if (!username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove shake class after animation
      return;
    }

    setError(''); // Clear previous error message

    // Fetch registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const user = registeredUsers.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.userType === userType
    );

    if (user) {
      // User found: Set auth state in localStorage
      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuthenticated: true,
          username: user.username,
          userType: user.userType || 'user',
        })
      );

      // Navigate to dashboard based on userType
      // navigate(`/${user.userType || 'user'}`);
      login(user.username, 'user')
      navigate('/user')
    } else {
      // User not found: Show error message
      setError('Invalid username or password.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
      <div className='w-full max-sm:w-full flex max-sm:gap-3 justify-between max-sm:justify-between max-sm:flex items-center px-9 py-6'>
        <h1 className='text-xl max-sm:text-sm border-emerald-500 border max-sm:font-bold px-3 py-1 rounded font-bold'>Employee Management System</h1>
        <AdminButton />
      </div>
      <div className="w-screen mt-52 text-center justify-center items-center flex">
        <div className="w-[20%] max-sm:w-[80%] max-md:w-[60%] max-lg:w-[60%] max-xl:w-2/6 max-sm:p-7 flex flex-col gap-10 p-10 border rounded-xl border-teal-500">
          <h1 className="text-4xl font-bold">Login 👋</h1>
          <form className="flex gap-4 flex-col" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className="p-2 rounded-lg bg-transparent border"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg bg-transparent border"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
            <div className="flex justify-between p-2 items-center">
              <div className="flex gap-2 w-full justify-between items-center">
                <div
                  className={`text-red-500 text-sm flex justify-start mb-2 ${shake ? 'shake' : ''
                    }`}
                >
                  {error}
                </div>
                {/* Link to the registration page */}
                <Link
                  to="/register"
                  className="font-light underline text-sm text-blue-600 hover:text-blue-400"
                >
                  Not registered?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-500 p-2 rounded-full text-white font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
