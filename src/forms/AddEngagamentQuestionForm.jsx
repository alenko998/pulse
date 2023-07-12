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

export default function AddEngagamentQuestionForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

        <div className="sm:col-span-6 mt-10">
            <p className='text-sm text-gray-500 mb-5'>All engagement question are standardized to use 1-10 rating scale. Make sure they
            are framed in a correct positive manner where 10 is a good result. Keep the language
            as simple as possible and make sure to pick the closest possible driver/target
            category. </p>

              <label htmlFor="driver" className="block text-sm font-medium leading-6 text-gray-900">
                Driver
              </label>
              <div className="mt-2">
                <select
                  id="driver"
                  name="driver"
                  autoComplete="driver"
                  className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                >
                  <option>Accomplishment</option>
                </select>
              </div>
            </div>

          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="col-span-full">
              <label htmlFor="question" className="block text-sm font-medium leading-6 text-gray-900">
              Question
              </label>
              <div className="mt-2">
                <textarea
                  id="question"
                  name="question"
                  rows={5}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder='For example: How likely is it that you would recommend Pulse as a place of work?'
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

 
    </form>
  )
}
