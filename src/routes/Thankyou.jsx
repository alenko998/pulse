import React from 'react'
import Dropdown from '../components/Dropdown'

const Thankyou = () => {
  return (
    <div className='flex flex-col h-screen w-full p-10 items-center'>
      <div className='self-end'>
        <Dropdown/>
      </div>
      <div className='flex flex-col mt-40 min-w-[800px]'>
        <h1 className='font-bold text-4xl mb-2'> Name , thank you for your feedback!</h1>
        <p className='text-xs'>You are anonymous. Only you can see your individual results and responses. All scores</p>
        <p className='text-xs'>are anonymized and aggregated when presented to the organization</p>
        <div className='flex mt-12 mb-8 items-center'>
          <p className=''>Your feedback</p>
          <p className='text-xs  ml-6'>Only visible to you</p>
        </div>
        {/* first */}
        <div className='flex  w-full justify-between'>
          <div className='border border-gray-500 w-[250px] h-[130px]'>

          </div>
          <div className='border border-gray-500 w-[250px] h-[130px]'>

          </div>
          <div className='border border-gray-500 w-[250px] h-[130px]'>

          </div>
        </div>
        {/* second */}
        <div className='flex mt-12 items-start'>
          <div className='flex flex-col'>
            <p className='mb-6'>Your next survey</p>
            <div className='border border-gray-500 w-[250px] h-[160px]'></div>
          </div>
          <div className='flex flex-col ml-7'>
            <p className='mb-6'>Your activity</p>
            <div className='flex flex-col justify-between'>
              <div className='border border-gray-500 w-[250px] h-[60px] mb-[40px]'></div>
              <div className='border border-gray-500 w-[250px] h-[60px]'></div>
            </div>
          </div>
          <div className='flex flex-col ml-7'>
            <p className='mb-6'>Your activity</p>
            <div className='flex flex-col justify-between'>
              <div className='border border-gray-500 w-[250px] h-[60px] mb-[40px]'></div>
              <div className='border border-gray-500 w-[250px] h-[60px]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thankyou