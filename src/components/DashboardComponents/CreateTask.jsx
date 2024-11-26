import React, { useCallback, useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)


    const [taskDescription, settaskDescription] = useState('');
    const [taskTitle, settaskTitle] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [category, setcategory] = useState('');
    const [assign, setassign] = useState('');
    const [newTask, setNewTask] = useState({});

    const submitHandler = (e)=> {
        e.preventDefault()
        setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:true, completed:false})
        const data = userData

        data.forEach(function (elem) {
            if(assign == elem.name) {
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask+1
            }
        })
        setUserData(data)
        console.log(data)

        settaskTitle('')
        settaskDescription('')
        settaskDate('')
        setcategory('')
        setassign('') 
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-wrap w-full px-5 items-center justify-between'>
                    <div className='w-1/2'>
                        <div className=''>
                            <h3 className='text-2xl text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={taskTitle} onChange={(e)=>{
                                settaskTitle(e.target.value)
                            }} className='py-1 px-2 w-4/5 mt-2 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-2xl text-gray-300 mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e)=>{
                                settaskDate(e.target.value)
                            }} className='py-1 px-2 mt-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" placeholder='Make a UI design' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-2xl text-gray-300 mb-0.5'>Assign To</h3>
                            <input value={assign} onChange={(e)=>{
                                setassign(e.target.value)
                            }} className='py-1 mt-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-2xl text-gray-300 mb-0.5'>Category</h3>
                            <input value={category} onChange={(e)=>{
                                setcategory(e.target.value)
                            }} className=' mt-2 py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                        </div>
                        
                    </div>

                    <div className='flex w-2/4 flex-col flex-wrap items-start'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea value={taskDescription} onChange={(e)=>{
                                settaskDescription(e.target.value)
                            }} className='w-full h-72 mt-1 py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full mt-4'>Create Task</button>
                        </div>
                </form>
            </div>
  )
}

export default CreateTask
