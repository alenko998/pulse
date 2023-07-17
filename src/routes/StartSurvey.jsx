import React from 'react'
import Dropdown from '../components/Dropdown'
import {AiOutlineMessage,AiOutlineClockCircle,AiTwotoneLock} from 'react-icons/ai'


const StartSurvey = () => {
  return (
    <div className='w-full h-screen flex flex-col px-10 py-10  items-center'>
      <div className='self-end mb-56'>
        <Dropdown/>
      </div>
      <div className='flex flex-col w-full md:w-2/3 lg:w-1/3  items-start'>
        <h1 className='font-medium text-2xl mb-2'>Tell us how you feel being part of Organization</h1>
        <p className=''>This is your weekly survey to check the pulse of our organization.</p>
        <div className='flex justify-between w-full mt-7'>
          <div className='flex flex-col items-center'>
            <AiOutlineMessage size={60}/>
            <p className='text-xs'>X questions </p>
          </div>
          <div className='flex flex-col items-center'>
            <AiOutlineClockCircle size={60}/>
            <p className='text-xs'>~Y minutes to respond </p>
          </div>
          <div className='flex flex-col items-center'>
            <AiTwotoneLock size={60}/>
            <p className='text-xs'>Anonymous responses</p>
          </div>
        </div>
        <a href="/survey" style={{width: '100%'}}>
        <button
           style={{ width: '100%' }}
           type="button"
           className="rounded-md self-center bg-indigo-600 mt-7 px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start survey
        </button>
        </a>
        <div className='mt-10'>
            <p className='text-md text-gray-500'>This survey asks questions about your experience in Organization. It
            covers topics like company culture, leadership and strategy. Responses are
            anonymous. To ensure anonymity, results will be visible only if N or more people
            have completed this survey. Collected results are aggregated so your identity
            cannot be deduced. The collected results are used to provide management </p>
        </div>

      </div>
   
    </div>
  )
}

export default StartSurvey