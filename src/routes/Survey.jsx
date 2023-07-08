import React from 'react'
import Dropdown from '../components/Dropdown'
import {AiOutlineMessage,AiOutlineClockCircle,AiTwotoneLock} from 'react-icons/ai'
import Button from '../components/Button'
import AddValue from '../Slideovers/AddValue'

const Survey = () => {
  return (
    <div className='flex flex-col w-full h-screen  p-10 items-center'>
      <div className='self-end'>
        <Dropdown/>
      </div>
      <div className='flex flex-col mt-40'>
        {/* heading */}
        <h1 className='font-bold self-start mb-2 text-4xl'>Tell us how you feel being part of  Organization </h1>
        {/* paragraph */}
        <p className=''>This is your weekly survey to check the pulse of our organization</p>
        {/* icons */}
        <div className='flex mt-7 justify-between'>
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
        {/* button */}
        <button
           type="button"
           className="rounded-md bg-indigo-600 mt-7 px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start survey
        </button>
        <div className='max-w-[750px] mt-10'>
            <p className='text-xs'>This survey asks questions about your experience in Organization. It
            covers topics like company culture, leadership and strategy. Responses are
            anonymous. To ensure anonymity, results will be visible only if N or more people
            have completed this survey. Collected results are aggregated so your identity
            cannot be deduced. The collected results are used to provide management </p>
        </div>
      </div>
    </div>
  )
}

export default Survey