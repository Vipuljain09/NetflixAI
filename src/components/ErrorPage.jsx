import React from 'react'
import Header from './Header'

const ErrorPage = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-around h-[100%] bg-gradient-to-bl from-black min-h-screen'>
        <img className='w-[100px] sm:w-[300px] h-96 object-contain' src={require('../errorImg.png')} alt="error-logo"/>
        <div className='flex flex-col items-center justify-between text-white w-[50%]'>
          <p className='text-4xl md:text-6xl font-bold text-center'>Oh... snap!</p>
          <p className='text-xl md:text-5xl text-center my-4 tracking-wider'>You've discovered our secret 404 page! It's so exclusive, even we can't find it.</p>
          <p className='text-2xl md:text-4xl bg-red-700 px-2 py-2 sm:px-6 sm:py-4 rounded-md my-1 cursor-pointer text-center'>Go to Home</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
