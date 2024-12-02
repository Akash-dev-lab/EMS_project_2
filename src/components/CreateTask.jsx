import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext';
import { v4 as uuid } from 'uuid';

const CreateTask = () => {
    const { tasks, addTask } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({ title: '', assignedTo: '', Date: '', category: '', description: '' });
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleAddTask = (e) => {
        e.preventDefault()
        const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if assignedTo user exists
        const isUserValid = registeredUsers.some((user) => user.username === newTask.assignedTo);

        if (!isUserValid) {
            setError(`"${newTask.assignedTo}" This user does not exist.`);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);
            return;
        }

        addTask({ ...newTask, id: uuid(), status: 'pending', Date: '' });
        setNewTask({ title: '', assignedTo: '', Date: '', category: '', description: '' });
    };

    return (
        <div className='p-5 bg-[#1c1c1c] rounded'>
            <form onSubmit={(e)=>{
                handleAddTask(e)
            }} className='flex max-sm:flex-col flex-wrap w-full px-5 items-center justify-between'>
                <div className='w-1/2 max-sm:w-full'>
                    <div className=''>
                        <h3 className='text-2xl text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} className='py-1 px-2 w-4/5 max-sm:w-full text-white mt-2 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-2xl text-gray-300 mb-0.5'>Date</h3>
                        <input value={newTask.Date} onChange={(e) => setNewTask({ ...newTask, Date: e.target.value })} className='py-1 px-2 mt-2 w-4/5 max-sm:w-full text-white rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" placeholder='Make a UI design' />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-2xl text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={newTask.assignedTo} onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })} className='py-1 mt-2 max-sm:w-full text-white px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div className='mt-2'>
                        <h3 className='text-2xl text-gray-300 mb-0.5'>Category</h3>
                        <input value={newTask.category} onChange={(e) => setNewTask({ ...newTask, category: e.target.value })} className=' mt-2 py-1 text-white max-sm:w-full px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>

                </div>

                <div className='flex w-2/4 max-sm:w-full flex-col flex-wrap items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} className='w-full h-72 mt-1 max-sm:w-full text-white py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm w-full mt-4'>Create Task</button>
                </div>
            </form>

            {/* Error Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-red-500 font-bold">{error}</p>
                    </div>
                </div>
            )}

            {/* <ul>
                {tasks.map((task) => (
                    <li className='text-white' key={task.id}>
                        {task.title} - {task.assignedTo} ({task.status})
                    </li>
                ))}
            </ul> */}

        </div>
    )
}

export default CreateTask


{/* <div>
                <input
                    className='text-black'
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                    className='text-black'
                    type="text"
                    placeholder="Assign To"
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            {/* Error Popup */}
// {showPopup && (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//             <p className="text-red-500 font-bold">{error}</p>
//         </div>
//     </div>
// )}
// <ul>
//     {tasks.map((task) => (
//         <li key={task.id}>
//             {task.title} - {task.assignedTo} ({task.status})
//         </li>
//     ))}
// </ul> */}