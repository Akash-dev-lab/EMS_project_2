import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[435px] p-5 flex justify-between flex-col bg-red-400 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className=''>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold'>{data.taskTitle}</h2>
                <p className='mt-2'>
                {data.taskDescription}
                </p>
                <div className="mt-5">
                    <button className="bg-red-600 w-full text-white py-3 px-3 rounded">Failed</button>
                </div>
            </div>
  )
}

export default FailedTask
