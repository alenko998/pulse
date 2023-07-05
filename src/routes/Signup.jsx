import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-screen p-10 pt-20 pb-32'>
      <div className='w-6/7 h-full flex'>  
        <div className=' flex flex-col  items-center w-2/5 h-full pt-4'>
          <div className=' w-3/4'>
              <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up for a new account
              </h2>
            </div>
            {/* form */}
            <form className="space-y-6 flex flex-col items-center justify-center w-3/4 mt-8" action="#" method="POST">
              {/* field */}
              <div className='w-2/3'>
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="first-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              {/* field */}
              </div>
              <div className='w-2/3'>
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="last-name"
                  autoComplete="last-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
             </div>
             {/* field */}
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
            {/* field */}
            <div className='w-2/3'>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* field */}
            <div className='w-2/3'>
              <div className="flex items-center justify-between">
                <label htmlFor="repeat-passowrd" className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat password
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  id="repeat-passowrd"
                  name="repeat-passowrd"
                  type="password"
                  autoComplete="repeat-passowrd"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* field */}
            <div className="flex">
              <div>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              </div>
              <div className=''>
              <label htmlFor="remember-me" className="flex flex-col ml-3 text-sm leading-6 text-gray-900 items-center">
                <p className=''>I have read and agree to the</p>
                <a href="/terms"><p className='font-bold'>Terms of Services</p></a>
              </label>
              </div>
            </div>
            {/* button */}
            <div className='w-2/3'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <a href="/dashboard/one">Sign up</a>
 
              </button>
            </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500 w-3/4">
              Already have an account?{' '}
              <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
              </a>
            </p>
        </div>
        <div className='w-3/5 h-full pt-16'>
          <div className='border border-gray-500  h-[645px] hidden lg:block'/>
        </div>
      </div>
    </div>
  )
}

export default Signup