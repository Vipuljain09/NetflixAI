import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";


const VideoTitle = ({title,overview}) => {
  console.log(title,overview);
  // return (
  //   <div className='flex flex-col justify-end text-white h-[80vh] w-[35%] mx-[5%] absolute z-[110] bg-gradient-to-r from-black'>

  //       <p className='text-6xl font-extrabold p-2'>{title}</p>
  //       <p className='text-xl my-4 '>{overview}</p>
  //       <div className='flex items-center gap-4'>
  //         <button className='flex items-center gap-2 bg-gray-500 text-white px-12 py-4 rounded-md font-medium text-2xl'> <FaPlay/>Play</button>
  //         <button className='flex items-center gap-2 bg-gray-500 text-white px-12 py-4 rounded-md font-medium text-2xl'> <ImInfo/>More Info</button>
  //       </div>
  //   </div>
  // )
  return (
    <div className='w-screen max-w-full aspect-video bg-gradient-to-r from-black overflow-hidden'>

    <div className='flex flex-col justify-end text-white w-[45%] mx-[5%] absolute top-[70px] sm:top-[100px] z-[110] '>
        <p className='text-sm sm:text-xl lg:text-4xl font-extrabold sm:p-2'>{title}</p>
        <p className='hidden sm:block text-base lg:text-xl md:my-2 '>{overview}</p>
        <div className='flex items-center gap-1 sm:gap-4'>
          <button className='flex items-center sm:gap-2 bg-gray-500 text-white px-2 sm:px-6 lg:px-10 py-1 md:py-4 rounded-md font-medium text-lg sm:text-xl'> <FaPlay size={'15px'}/>Play</button>
          <button className='flex items-center gap-1 sm:gap-2 bg-gray-500 text-white px-2 sm:px-6 lg:px-10 py-1 md:py-4 rounded-md font-medium text-lg sm:text-xl'> <ImInfo size={'15px'}/>Info</button>
        </div>
    </div>
    </div>
  )
}

export default VideoTitle

