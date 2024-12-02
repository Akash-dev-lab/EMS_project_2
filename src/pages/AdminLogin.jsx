import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../index.css'

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: 'Akash', password: 'admin123' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    const { username, password } = credentials;

    if (!username || !password) {
      setError('Fill Admin Details'); // Set error message
      setShake(true); // Trigger shake animation
      setTimeout(() => setShake(false), 500);
      return
    }

    // Validate credentials
    if (username === 'Akash' && password === 'admin123') {
      login(username, 'admin'); // Set role as admin in AuthContext
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/admin'); // Redirect to the admin dashboard
      }, 1000); // Show popup for 1 second
    } else {
      setError('Invalid username or password');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
    <div className='w-full max-sm:w-full max-sm:justify-center flex max-sm:gap-3 justify-between max-sm:flex items-center px-9 py-6'>
        <h1 className='text-xl max-sm:text-md border-emerald-500 border max-sm:font-bold px-3 py-1 rounded font-bold'>Employee Management System</h1>
        {/* <AdminButton /> */}
      </div>

    <div className='w-screen mt-52 text-center justify-center items-center flex '>
      <div className='w-[20%] max-sm:w-[80%] max-md:w-[60%] max-lg:w-[60%] max-xl:w-2/6  max-sm:p-7 flex flex-col gap-10 p-10 border rounded-xl border-teal-500'>
        <h1 className='text-4xl font-bold'>Admin Login 😎</h1>
        <form className='flex gap-4 flex-col' action="">
          <input onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required className='p-2 rounded-lg bg-transparent border' type="text" placeholder='Admin username' />
          <input onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required className='p-2 rounded-lg bg-transparent border' type="password" placeholder='Admin password' />
          <div className='flex justify-between p-2 items-center'>
            <div className='flex gap-2 w-full justify-between'>
              <div className={`text-red-500 text-sm flex justify-start mb-2 ${shake ? 'shake' : ''
                }`}>
                {error}
              </div>

              <a href='/' className='font-light underline text-sm'>User Login?</a>
            </div>
          </div>
          <button onClick={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleLogin();
          }}
            className='bg-teal-500 hover:bg-teal-700 p-2 rounded-full text-white font-bold'>Login as Admin</button>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white w-2/12 h-2/6 p-4 justify-center gap-9 flex flex-col items-center rounded-lg">
            <div>
              <p className="text-xl text-black font-bold">Hello Admin 😊</p>
              </div>
              <span>
                <svg className="animate-spin h-6 rounded-md bg-emerald-600 w-6 mr-3" viewBox="0 0 24 24">
                </svg>
              </span>
              <p className="text-sm text-center text-black">You are Logging in...</p>
            </div>
          </div>
        )}

      </div>
    </div>
    </>
  );
};

export default AdminLogin;


{/* <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="text"
        placeholder="Admin Username"
        className="text-black border px-4 py-2 mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Admin Password"
        className="border text-black px-4 py-2 mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login as Admin
      </button>
    </div> */}