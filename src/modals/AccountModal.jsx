import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'

const AccountModal = ({open,setOpen}) => {
  

    const cancelButtonRef = useRef(null)
  
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className='w-full h-full'>
                    <p className="text-sm font-bold text-gray-500 px-4 pb-4 pt-5 sm:p-6">
                        Are you sure you want to remove your organization account?
                    </p>
                    <div className='bg-red-100'>
                        <p className='text-xs text-red-600 mx-20'>You will permanently delete all data from your account and your access will be blocked immediately.</p>
                    </div>
                    <p className="text-sm font-bold text-gray-500 px-4 pb-4 pt-5 sm:p-6">
                        Please type in the name of the organization to confrm:
                    </p>
                    {/* input field */}
                    <div className='w-full px-4 pb-4 pt-5 sm:p-6'>
                      <label htmlFor="organization-name" className="block text-sm font-medium leading-6 text-gray-900 pb-1">Please type in the name of the organization to confrm:</label>
                      <input
                      type="text"
                      name="organization-name"
                      id="organization-name"
                      autoComplete="organization-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse px-4 pb-4 pt-5 sm:p-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    I understand the consequences, delete organization
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
}

export default AccountModal