import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {FaDownload} from 'react-icons/fa'
import Button from '../components/Button'


export default function ImportModal({open,setOpen}) {


  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
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
              <Dialog.Panel className="flex flex-col  relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div className="sm:flex sm:items-start flex flex-col">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Import from Excel
                    </Dialog.Title>
                    <div className="mt-6 flex">
                      <p className="text-sm text-gray-500">
                      Step 1: Here you can get a template fle that matches the structure of attributes of your organization.
                      Just fll in the data in this template and upload it back to Pulse.
                      </p>
                    </div>
                    <div className='sm:ml-52 md:ml-64 mt-4' onClick={()=>{setOpen(false)}}>
                    <Button text={"Download template"}/>
                    </div>
                    <div className="mt-6 flex">
                      <p className="text-sm text-gray-500">
                      Step 2: Upload a template with your employees' data. Before uploading, make sure the column header
                      names are the same as your organization attributes. 
                      </p>
                    </div>
                    <div className='border flex flex-col  items-center border-gray-500 w-3/4 mx-auto  mt-6 py-4'>
                        <FaDownload size={80}/>
                        <p className='font-bold'>Drag and drop to upload</p>
                        <p className='text-sm text-gray-500"'>or <span className='text-blue-500 underline hover:cursor-pointer'>browse</span> to choose a fle</p>
                    </div>
                    <div className='sm:ml-60 md:ml-72 mt-4' onClick={()=>{setOpen(false)}}>
                    <Button text={"Import data"}/>
                    </div>
                  </div>
                 
                </div>
                {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Download
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
