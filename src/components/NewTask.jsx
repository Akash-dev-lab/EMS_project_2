import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const NewTask = ({data}) => {

    const { updateTaskStatus, acceptedTaskCount, setAcceptedTaskCount, failedTaskCount,
        setFailedTaskCount, } = useContext(TaskContext);
    
    const handleAcceptTask = () => {
        if (data.status !== 'accepted') {
          updateTaskStatus(data.id, 'accepted'); // Update task status to 'accepted'
          setAcceptedTaskCount(acceptedTaskCount + 1); // Increment the accepted task count
        }
      };
    
      const handleRejectTask = () => {
        if (data.status !== 'rejected') {
          updateTaskStatus(data.id, 'rejected'); // Update task status to 'rejected'
          setFailedTaskCount(failedTaskCount + 1);
        }
      };
    
    return (
        <>
        <div className='flex shrink-0 h-full w-[435px] max-sm:w-auto p-5 justify-between flex-col bg-yellow-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className=''>{data.status}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
            <p className='mt-2'>
                {data.description}
            </p>
            <div className="mt-5">
             {/* Conditionally Render Buttons */}
        {data.status === 'pending' && (
          <div className="flex gap-2">
            <button
              onClick={handleAcceptTask}
              className="bg-yellow-600 w-full text-white py-3 px-3 rounded"
            >
              Accept Task
            </button>
            <button
              onClick={handleRejectTask}
              className="bg-red-500 w-full text-white py-3 px-3 rounded"
            >
              Reject Task
            </button>
          </div>
        )}
        {data.status === 'accepted' && (
          <button
            onClick={() => updateTaskStatus(data.id, 'completed')}
            className={`w-full py-3 px-3 rounded text-white font-bold ${
              data.status === 'completed'
                ? 'bg-green-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-400'
            }`}
            disabled={data.status === 'completed'}
          >
            {data.status === <span className='text-white'>'completed'</span> ? 'Completed' : 'Mark as Complete'}
          </button>
        )}
        {data.status === 'rejected' && (
          <button
            disabled
            className="bg-gray-400 w-full text-white py-3 px-3 rounded cursor-not-allowed"
          >
            Rejected Task
          </button>
        )}
            </div>
        </div>
        </>
    )
}

export default NewTask