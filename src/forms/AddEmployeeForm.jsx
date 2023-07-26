/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function AddEmployeeForm() {
  return (
    <form>
      <div className=" mt-10">

        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Personal info</h2>

        <div className='flex '>
          <div className='w-1/4 '>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
          <div className="mt-8 ml-12 w-1/4 ">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
        </div>

        <div className='flex  mt-4'>
        <div className='w-1/4  '>
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
            Date of birth 
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="date"
                    id="date"
                    autoComplete="date"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="date of birth"
                 />
                </div>
              </div>
          </div>
        <div className='w-1/4  ml-12'>
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
              Gender
             </label>
             <div className="">
             <div className="mt-2">
                <select
                  id="driver"
                  name="driver"
                  autoComplete="driver"
                  className="block w-full pl-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                >
                  <option>Female</option>
                </select>
              </div>
              </div>
          </div>
        </div>

        <div className='border border-b  border-gray-900/10 mt-4 mb-4'/>

        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Contact info</h2>

        <div className='flex'>
        <div className='w-1/4  '>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              E-mail address
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
        <div className='w-1/4 ml-12'>
            <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
              Phone number
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="phone-number"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
        </div>

        <div className='border border-b  border-gray-900/10 mt-4 mb-4'/>

        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Employment info</h2>

        <div className='flex justify-between'>
        <div className='w-1/4  '>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
          <div className='w-1/4 '>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
          <div className='w-1/4  '>
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
             </label>
             <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder=""
                 />
                </div>
              </div>
          </div>
        </div>


      </div>
    </form>
  )
}
