import React, { useContext, useRef } from 'react'
import { TaskContext } from '../context/TaskContext';
import NewTask from './NewTask';
import AcceptTask from './AcceptTask';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TaskList = () => {
  const { tasks } = useContext(TaskContext)
  // console.log(tasks)
  return (
    <div className='flex sm:flex flex-col sm:flex-col max-sm:items-center gap-4 sm:justify-center sm:px-auto mt-10'>
      <h1 className='text-2xl font-semibold'>Your Tasks</h1>
    <Swiper
      spaceBetween={90}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {tasks.map((task, idx) => (
        <SwiperSlide key={idx}>
          <div className=''>
          <NewTask data={task} />
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
    </div>
  )
}

export default TaskList
