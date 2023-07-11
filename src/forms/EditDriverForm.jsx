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

export default function EditDriverForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

        <div className="sm:col-span-6 mt-10">
              <label htmlFor="contributes-to" className="block text-sm font-medium leading-6 text-gray-900">
              Contributes to
              </label>
              <div className="mt-2">
                <select
                  id="contributes-to"
                  name="contributes-to"
                  autoComplete="contributes-to"
                  className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                >
                  <option>Existing driver/target</option>
                </select>
              </div>
            </div>

          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4  w-[400px]">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name 
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1  border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="For example: Accomplishment"
                  />
                </div>
              </div>
            </div>

        
        
            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder='For example: Accomplishment description'
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

 
    </form>
  )
}
