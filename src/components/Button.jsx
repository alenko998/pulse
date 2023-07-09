import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button
            type="button"
            className=" inline-flex w-full justify-center focus-visible:outline focus-visible:outlilne-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 sm:mt-0 sm:w-auto"
        >
        {text}
        </button>
    </div>
  )
}

export default Button
// className=" 
//  focus-visible:outline focus-visible:outline-2 
//   focus-visible:outline-offset-2 focus-visible:outline-indigo-600"