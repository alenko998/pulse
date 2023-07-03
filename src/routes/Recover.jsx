import React from 'react'
import Login from '../forms/Loginform'

const Recover = () => {
  return (
    <div className='w-full h-screen  p-10 pt-32 pb-32'>
      <div className='w-6/7 h-full flex '>
        <div className='flex flex-col  justify-around items-center w-2/5 h-full pt-4'>
          <div className='w-3/4  flex flex-col items-center'>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Recover your password
            </h2>
          </div>
          <form className="space-y-6 flex flex-col items-center justify-center w-3/4" action="#" method="POST">
            <div className='w-2/3'>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
                </label>
                <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>
              <div className='w-2/3'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <a href="/signin">Recover your password</a>
               

              </button>
            </div>
            </form>

        </div>
        <div className='w-3/5 h-full pt-4'>
          <div className='border border-gray-500 h-[645px] hidden lg:block'/>
        </div>
      </div>
    </div>
  )
}

export default Recover