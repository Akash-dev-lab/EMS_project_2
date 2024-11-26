import React from 'react'
import Header from '../DashboardComponents/Header'
import CreateTask from '../DashboardComponents/CreateTask'
import AllTask from '../DashboardComponents/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full flex flex-col justify-between p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
