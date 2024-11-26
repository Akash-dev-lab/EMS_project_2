import React from 'react'
import Header from '../DashboardComponents/Header'
import TaskSection from '../DashboardComponents/TaskSection'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 flex flex-col justify-around bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskSection data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
