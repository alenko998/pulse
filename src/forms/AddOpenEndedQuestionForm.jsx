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

export default function AddOpenEndedQuestionForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

        <div className="sm:col-span-6 mt-10">
            <p className='text-sm text-gray-500 mb-5'>Open-ended questions allow employees to give free-text answers instead of scores.
            Use open-ended questions to get employee feedback on specifc topics, or to get
            responses on currently relevant issues.</p>

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
                  placeholder='For example: If you had a magic wand, what would be the frst thing you would change in our organization?'
                />
              </div>
            </div>

            
          </div>

          <label htmlFor="frequency" className="block text-sm font-medium leading-6 text-gray-900 mt-10">
                Frequency
              </label>
              <div className="mt-2">
                <select
                  id="frequency"
                  name="frequency"
                  autoComplete="frequency"
                  className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
                >
                  <option>Always</option>
                  <option>Once</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Twice a year</option>
                  <option>Yearly</option>
                </select>
              </div>
        </div>
        

      </div>

 
    </form>
  )
}
