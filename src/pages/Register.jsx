import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import { AuthContext } from '../context/AuthContext';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { login } = useContext(AuthContext);

  const handleRegister = () => {

    if (!username.trim() || !password.trim()) {
      setError('Fill all inputs to Register');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = registeredUsers.some((u) => u.username === username);

    if (userExists) {
      alert('User already exists. Please log in.');
      navigate('/');
      return;
    }

    registeredUsers.push({ username, password, userType: 'user' });
    localStorage.setItem('users', JSON.stringify(registeredUsers));

     login(username, 'user');

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/user');
    }, 1000);
  };

  useEffect(() => {
    if (username || password) {
      setError('');
    }
  }, [username, password]);

  return (
    <>
    <div className='w-full max-sm:w-full max-sm:justify-center flex max-sm:gap-3 justify-between max-sm:flex items-center px-9 py-6'>
        <h1 className='text-xl max-sm:text-md border-emerald-500 border max-sm:font-bold px-3 py-1 rounded font-bold'>Employee Management System</h1>
      </div>
      
    <div className='w-screen mt-52 text-center justify-center items-center flex '>
      <div className='w-[20%] max-sm:w-[80%] max-md:w-[60%] max-lg:w-[60%] max-xl:w-2/6  max-sm:p-7 flex flex-col gap-10 p-10 border rounded-xl border-emerald-500'>
        <h1 className='text-4xl font-bold'>Register 📝</h1>
        <input required value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 rounded-lg bg-transparent border text-sm' type="text" placeholder='enter your username' />
        <input value={password} onChange={(e) => setPassword(e.target.value)}
          required className='p-2 rounded-lg bg-transparent border text-sm' type="password" placeholder='enter your password' />
        <div className={`text-red-500 text-sm flex justify-start ${shake ? 'shake' : ''
          }`}>
          {error}
        </div>
        <button onClick={handleRegister} onChange={(e) => setCredentials({ ...credentials, userType: e.target.value })}
          className='bg-emerald-700 hover:bg-emerald-500 p-2 rounded-full text-white font-bold'>Register</button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-2/12 p-4 rounded-lg">
            <p className="text-xl text-black font-bold">✅ Registration successful !</p>
            <p className="text-sm mt-6 text-center text-black">Redirecting to your dashboard...</p>
          </div>
        </div>
      )}

    </div>
    </>
  );
}

export default Register;