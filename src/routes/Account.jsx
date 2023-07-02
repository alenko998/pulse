import React from 'react'
import Heading from '../components/Heading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'

const Account = () => {
  const title = "Account";
  const firstButton = "Upload logo";
  const secondButton = "Remove logo";
  return (
    <div>
      {/* heading */}
        <Heading title={title}/>
      {/* image and buttons */}
        <div className='flex flex-col  w-[300px] mx-auto mt-5'>
          <ImagePlaceholder/>
          <div className='flex justify-between'>
            <Button text={firstButton}/>
            <Button text={secondButton}/>
          </div>
        </div>
      {/* form */}
        <div className='w-[500px] mt-4 mx-auto flex-col '>

        
        <div className=' flex  mx-auto w-full '>
          <div className='w-full'>
            <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Organization name</label>
            <input
                    type="text"
                    name="organization-name"
                    id="organization-name"
                    autoComplete="organization-name"
                    className="block flex-1 border-b w-full border-gray-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Devfort LLC"
            />
          </div>
        </div>

        <div className='flex justify-between w-full mt-4'>
          <div className='w-1/3'>
            <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Industry</label>
            <div className="mt-2">
                  <select
                    id="industry"
                    name="industry"
                    autoComplete="industry"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Technology </option>
                  </select>
            </div>
          </div>
          <div className='w-1/3'>
            <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Size</label>
            <div className="mt-2">
                  <select
                    id="size"
                    name="size"
                    autoComplete="size"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>1-25</option>
                  </select>
            </div>
          </div>
        </div>

        <div className='flex justify-between w-full mt-4'>
          <div className='w-1/3'>
            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Location</label>
            <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="location"
                    className="block flex-1 border-b w-full border-gray-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="USA"
            />
          </div>
          <div className='w-1/3'>
            <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Time zone</label>
            <div className="mt-2">
                  <select
                    id="time-zone"
                    name="time-zone"
                    autoComplete="time-zone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Eastern Standard Time</option>
                  </select>
            </div>
          </div>
        </div>
        {/* end of form */}
        </div>
        {/* buttons */}
        <div className='flex justify-center items-center mt-12 w-1/2 mx-auto'>
          <div className='mr-5'>
            <SecondaryButton text="cancel"/>
          </div>
          <div className='ml-5'>
            <Button text="Save"/>
          </div>
        </div>

        <div className='h-[1px] bg-black mt-4'></div>
        <h1 className='text-2xl font-light'>Delete account</h1>
        <p>If you want to remove your organization and all its data, you <span className='text-blue-500 underline'>can delete your account</span>. Note that this action cannot be undone, and it will permanently delete all data from your account and your access
        will be blocked immediately.</p>



    </div>
  )
}

export default Account