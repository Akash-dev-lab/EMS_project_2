import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {

  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData)

  useEffect(()=>{

    const loggedInUser = localStorage.getItem('loggedInUser') 
    if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setuser(userData.role)
    setLoggedInUserData(userData.data)
  }
  }, [])

  const HandleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
     setuser('admin')
     localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if (userData) {
      const employee = userData.find((e)=> email == e.email && e.password == password)
      if(employee){
     setuser('employee')
     setLoggedInUserData(employee)
     localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
    }
    }
    else {
      alert('Invalid Credentials');
    }
  }

  return (
    <>
    {!user ? <Login handlelogin={HandleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setuser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={LoggedInUserData} /> : null)}
    </>
  )
}

export default App
