import React from 'react'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'

const Submit = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center p-10'>
        <div className='self-end'>
            <Dropdown/>
        </div>
        <div className='flex flex-col mt-40'>
            {/* heading */}
            <h1 className='font-bold self-start mb-2'>Are you ready to submit your responses?</h1>
            {/* paragraph */}
            <p className='mb-4'>You have answered 80% of the questions.</p>
            <p>When you are ready to send responses, click the Submit button below.<br/>
            Also, you can go back and change some of your answers before submitting.</p>
            {/* buttons */}
            <div className='flex  mt-24 justify-between  items-center'>
                <SecondaryButton text="Change answers "/>
                <button
                type="button"
                className="rounded-md bg-indigo-600 px-16 py-2.5 text-sm font-semibold 
                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Submit
                </button>
            </div>
            <p className='text-xs mt-24 self-start'>By submitting responses to this survey, you agree to our Privacy Policy.</p>
        </div>
    </div>
  )
}

export default Submit