import React from 'react';

//import data
import { workouts } from '../data';

//import swiér react cmponents
import { Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';

//import required modules
import { Navigation } from 'swiper';
// desctructure workout data
const {programs} = workouts

export const WorkoutSlider = () => {
  return (
    <Swiper slidesPerView={2}
    spaceBetween={32}
    navigation={true}
    breakpoints={{768:
      {
      slidesPerView:3
      },
      1024:{
        slidesPerView:4,
      }
    }}
    modules = {[Navigation]}
    className='workoutSlider'
    >
    {programs.map((program,index)=>{
      // destructure program
      const{image,name}= program;
      return(
        <SwiperSlide className='max-w-[320px] max-h-[320px] relative' key={index}>
          <img className='w-full h-full object-cover' src={image} alt="" />
          <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex-items-center rounded-[1px]'>
            <div className='font-primary font-semibold texts-sm text-neutral-500'>{name}</div>
          </div>
          </SwiperSlide>
      )
    })}
  </Swiper>
  )
 
};


