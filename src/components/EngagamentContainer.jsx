import React from 'react'
import ToggleButton from '../components/ToggleButton'
import Button from '../components/Button'

const EngagamentContainer = () => {
  return (
    <div className='p-10 sm:pl-20 sm:pr-20 xl:pl-60 xl:pr-60'>
    <p className='text-sm text-gray-500 mb-4'>Employee engagement is a measure of employees’ enthusiasm for their work and their commitment to the goals
    of the organization. Engaged employees are loyal and willing to go the extra mile to help the company succeed.</p>
    <div className='border border-gray-400 mr-10  mb-12'/>

  

    <div className='w-full border border-gray-400 px-0 sm:px-2 py-4 flex flex-col'>
      <h1 className='text-lg font-semibold underline ml-3'>Accomplishment</h1>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-md ml-3 font-medium'>Most days, I feel a sense of accomplishment from what I do.</h1>
        <div className='flex items-center'>
          <ToggleButton/>
          <div className='mr-3 ml-3'>
            <Button text={"Edit"}/>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-md ml-3 font-medium'>Another question re: Accomplishment.</h1>
        <div className='flex items-center'>
          <ToggleButton/>
          <div className='mr-3 ml-3'>
            <Button text={"Edit"}/>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full border-b border-r border-l border-gray-400 px-4 sm:px-6 py-4 flex flex-col mb-5'>
        <div className='w-full ml-4 flex flex-col mb-2'>
          <h1 className='text-lg font-semibold underline'>Challenging</h1>
          <div className='flex justify-between items-center mt-2'>
            <h1 className='text-md font-medium'>I have an opportunity to do challenging things at work.</h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='mr-3 ml-3'>
                <Button text={"Edit"}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  

    <div className='w-full border border-gray-400 px-0 sm:px-2 py-4 flex flex-col'>
      <h1 className='text-lg font-semibold underline ml-3'>Freedom of Opinion</h1>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-md ml-3 font-medium'>At work, my opinion seem to be valued.</h1>
        <div className='flex items-center'>
          <ToggleButton/>
          <div className='mr-3 ml-3'>
            <Button text={"Edit"}/>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-md ml-3 font-medium'>Another question re: Freedom of Opinion.</h1>
        <div className='flex items-center'>
          <ToggleButton/>
          <div className='mr-3 ml-3'>
            <Button text={"Edit"}/>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full border-b border-r border-l border-gray-400 px-4 sm:px-6 py-4 flex flex-col mb-5'>
        <div className='w-full ml-4 flex flex-col mb-2'>
          <h1 className='text-lg font-semibold underline'>Manager</h1>
          <div className='flex justify-between items-center mt-2'>
            <h1 className='text-md font-medium'>My manager cares about my opinion.</h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='mr-3 ml-3'>
                <Button text={"Edit"}/>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full ml-4 flex flex-col mb-2'>
          <h1 className='text-lg font-semibold underline'>Team</h1>
          <div className='flex justify-between items-center mt-2'>
            <h1 className='text-md font-medium'>My coworkers welcome opinions diferent from their own. </h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='mr-3 ml-3'>
                <Button text={"Edit"}/>
              </div>
            </div>
          </div>
        </div>
    </div>



</div>
  )
}

export default EngagamentContainer