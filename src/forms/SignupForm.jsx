import React from 'react'

const SignupForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-between px-6  lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up for a new account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
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
        </div>

        <div>
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="last-name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
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

        <div>
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

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="repeat-password" className="block text-sm font-medium leading-6 text-gray-900">
                Repeat password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="repeat-password"
              name="repeat-password"
              type="password"
              autoComplete="repeat-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='flex items-start md:ml-4 lg:ml-16'>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <div className='flex flex-col items-center'>
                <label htmlFor="remember-me" className="ml-3 block sm:text-sm text-xs leading-6 text-gray-900">
                    I have read and agree to the <br/> 
                </label>
                <a href="/terms">
                <span className='font-bold block text-sm leading-6 text-gray-900'>Terms of Service</span> 
                </a>
                </div>
               
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500 ">
        Already have an account?{' '}
        <a href="signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Sign in
        </a>
      </p>
    </div>
  </div>
  )
}

export default SignupForm