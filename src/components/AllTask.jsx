import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const AllTask = () => {
    const { tasks, taskCount } = useContext(TaskContext);
    console.log(tasks)
    console.log(taskCount)
  return (
    <div id='scrollbar' className='bg-[#1c1c1c] p-5 rounded mt-5'>
               <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between items-center rounded'>
                    <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                    <h3 className='w-1/5 text-lg font-medium'>All Tasks</h3>
                    <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                    <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                    <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
               </div>
               <div className=''>
                    {tasks.map(function (elem, idx) {
                         return <div key={idx} className='border-2 border-emerald-500 mb-2 py-6 px-4 flex justify-between rounded'>
                              <h2 className='w-1/5 text-lg font-medium'>{elem.assignedTo}</h2>
                              <h3 className='w-1/5 text-lg font-medium text-blue-400'>{taskCount}</h3>
                              <h5 className='w-1/5 text-lg font-medium text-yellow-600'>{elem.status}</h5>
                         </div>
                    })}
               </div>
          </div>
  )
}

export default AllTask
