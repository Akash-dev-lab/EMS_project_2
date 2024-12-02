import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';


const TaskSection = () => {


    const { taskCount, acceptedTaskCount } = useContext(TaskContext);

    return (
        <>
            <div className="text-center mb-8">
                <p className="text-lg font-semibold">
                    You have {taskCount} pending task{taskCount === 1 ? '' : 's'}.
                </p>
            </div>

            <div className='flex justify-between sm:flex-wrap max-sm:flex-wrap mt-10 gap-5'>
                <div className='bg-blue-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold'>{taskCount || 0}</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>

                <div className='bg-green-500 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold'>{0}</h2>
                    <h3 className='text-xl font-medium'>Completed Task</h3>
                </div>

                <div className='bg-yellow-500 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold'>{acceptedTaskCount || 0}</h2>
                    <h3 className='text-xl font-medium'>Accepted Task</h3>
                </div>

                <div className='bg-red-500 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold'>{0}</h2>
                    <h3 className='text-xl font-medium'>Failed Task</h3>
                </div>
            </div>
        </>
    )
}

export default TaskSection
