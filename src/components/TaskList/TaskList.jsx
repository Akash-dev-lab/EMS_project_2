import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    // console.log(data)
    return (
        <div id='tasklist' className='w-full overflow-x-auto flex items-center justify-between gap-5 flex-nowrap mt-10 h-[50%] py-5 px-2'>
            {data.tasks.map((elem, idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} />
                }
                if(elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if(elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if(elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>
    )
}

export default TaskList
