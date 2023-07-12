import React from 'react'
import ToggleButton from '../components/ToggleButton'
import Button from '../components/Button'

const OpenEndedContainer = () => {
  return (
    <div className='p-10 sm:pl-20 sm:pr-20 xl:pl-60 xl:pr-60'>
    <p className='text-sm text-gray-500 mb-4'>Open-ended questions allow employees to give free-text answers instead of scores. Use open-ended questions
    to get employee feedback on specifc topics, or to get responses on currently relevant issues</p>
    <div className='border border-gray-400 mr-10  mb-12'/>

  

    <div className='w-full border border-gray-400  flex flex-col'>
        <div className='w-full border-b border-gray-400 py-4 flex px-1 sm:px-4 items-center justify-between'>
            <h1 className='text-lg font-semibold'>What aspects of your onboarding process worked well, and what not?</h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='ml-3'>
              <Button text={"Edit"}/>
              </div>
            </div>
        </div>
        <div className='w-full border-b border-gray-400 py-4 flex px-1 sm:px-4 items-center justify-between'>
            <h1 className='text-lg font-semibold'>Do you have any feedback on our recruitment process?</h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='ml-3'>
              <Button text={"Edit"}/>
              </div>
            </div>
        </div>
        <div className='w-full border-b border-gray-400 py-4 flex px-1 sm:px-4 items-center justify-between'>
            <h1 className='text-lg font-semibold'>What team event would you like to see next?</h1>
            <div className='flex items-center'>
              <ToggleButton/>
              <div className='ml-3'>
              <Button text={"Edit"}/>
              </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default OpenEndedContainer