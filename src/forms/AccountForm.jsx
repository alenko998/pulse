import React from 'react'

const AccountForm = () => {
  return (
<div className='w-[450px] mt-4 mx-auto flex-col'>

  <div className=' flex  mx-auto w-full '>
    <div className='w-full'>
        <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Organization name</label>
        <input
            type="text"
            name="organization-name"
            id="organization-name"
            autoComplete="organization-name"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Devfort LLC"
        />
    </div>
  </div>

  <div className='flex justify-between w-full mt-4'>
    <div className='w-2/5'>
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
        <div className='w-2/5'>
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
    <div className='w-2/5'>
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900 pl-1">Location</label>
        <input
            type="text"
            name="location"
            id="location"
            autoComplete="location"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="USA"
        />
        </div>
        <div className='w-2/5'>
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
</div>
  )
}

export default AccountForm