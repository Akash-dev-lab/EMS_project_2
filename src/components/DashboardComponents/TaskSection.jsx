import React from 'react'

const TaskSection = ({data}) => {
  return (
    <div className='flex justify-between mt-10 gap-5'>
      <div className='bg-blue-400 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='bg-green-500 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='bg-yellow-500 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='bg-red-500 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskSection
