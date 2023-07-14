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
import ToggleButton from '../components/ToggleButton'
import Button from '../components/Button'
import SegmentsTable from '../tables/SegmentsTable'




export default function AddOptionForm() {
  return (
    <form>
      <div className="space-y-4">
        <div className="border-b border-gray-900/10 pb-4">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4  w-[400px] flex justify-between items-center">
                <div className='w-3/5'>
                {/* input */}
                <div className='flex  w-[400px] '>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900 ml-56">
                 Status
                </label>
                </div>
                
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1  border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="For example: Technology"
                  />
                </div>
              </div>
                </div>
            {/* toggle */}
  
                <div className='flex items-center mt-8  w-full justify-end'>
                    <ToggleButton/>
                    <p className='block text-xs font-medium leading-6 text-gray-900 ml-3'>Active/Inactive</p>
                </div>

            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder='For example: Specify tech-stack for each employee'
                />
              </div>
            </div>
          </div>
        </div>
        {/* segments */}
        <div className=' w-full flex justify-between items-center'>
          <label htmlFor="segments" className="block text-sm font-medium leading-6 text-gray-900 w-1/5">
            Segments
          </label>
          <div className='w-3/5 flex justify-end'>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full mr-1">
                <input
                type="text"
                name="segment-field"
                id="segment-field"
                autoComplete="segment-field"
                className="block flex-1  border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
                />
            </div>
            <Button text={"Add"}/>
          </div>
        </div>
        {/* table */}
        <div className='h-[240px] overflow-scroll'>
            <SegmentsTable/>
        </div>

      </div>
    </form>
  )
}
