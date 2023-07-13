import React from 'react'
import Dropdown from '../components/Dropdown'
import SecondaryButton from '../components/SecondaryButton'
import Button from '../components/Button'



const Submit = () => {
  return (
    <div className='w-full h-screen flex flex-col px-10 py-10  items-center'>
      <div className='self-end mb-56'>
        <Dropdown/>
      </div>
      <div className='flex flex-col w-full md:w-2/3 lg:w-1/3 justify-between items-start h-[340px]'>
        <div>
        <h1 className='font-medium text-2xl mb-2'>Are you ready to submit your responses?</h1>
        <p className='mb-3'>You have answered 80% of the questions. </p>
        <p className=''>When you are ready to send responses, click the Submit button below.
        Also, you can go back and change some of your answers before submitting.</p>
        </div>
        <div className='flex w-full justify-around items-center'>
          <div>
            <SecondaryButton text={"Change answers"}/>
          </div>
          <div className='mt-3 sm:mt-0'>
            <Button text={"Submit"}/>
          </div>

        </div>
        <div className='mt-10'>
            <p className='text-md text-gray-500'>By submitting responses to this survey, you agree to our Privacy Policy.</p>
        </div>
      </div>
   
    </div>
  )
}

export default Submit