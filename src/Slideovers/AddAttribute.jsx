import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SecondaryButton from '../components/SecondaryButton'
import AddDriverForm from '../forms/AddDriverForm'
import AddValueForm from '../forms/AddValueForm'
import AddOpenEndedQuestionForm from '../forms/AddOpenEndedQuestionForm'
import AccountForm from '../forms/AccountForm'
import {FcMenu} from 'react-icons/fc'
import {BsCheckLg,BsWindowSplit} from 'react-icons/bs'
import {CiCalendarDate} from 'react-icons/ci'
import {AiOutlineUser} from 'react-icons/ai'
import AddOptionForm from '../forms/AddOptionForm'
import AddDateForm from '../forms/AddDateForm'
import AddEmployeeForm from '../components/AddEmployeeForm'
import AddCombinationForm from '../forms/AddCombinationForm'

export default function AddAttribute({open,setOpen}) {

    const [option, setOption] = useState(true);
    const [date, setDate] = useState(false);
    const [employee, setEmployee] = useState(false);
    const [combination, setCombination] = useState(false);


    const [form, setForm] = useState(<AddOptionForm/>);




  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-end justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Add new attribute
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col justify-between">
                      <div>
                          <div className=' border border-gray-900 mt-[-10px]'/>
                          <div className='flex mt-2 justify-between'>
                            <div className='flex flex-col items-center justify-center w-[90px] h-[90px] border border-gray-500 cursor-pointer'
                            onClick={()=>{
                              setOption(true);
                              setDate(false);
                              setEmployee(false);
                              setCombination(false);
                              setForm(<AddOptionForm/>)
                            }}
                            >
                              <BsCheckLg className={option ? 'self-end' : 'hidden'}/>
                              <div className={`flex flex-col items-center ${option ? 'mb-4' : 'mb-0'}`}>
                                <FcMenu size={40}/>
                                <p className='text-xs font-bold'>Option</p>
                              </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[90px] h-[90px] border border-gray-500 cursor-pointer'
                              onClick={()=>{
                                setOption(false);
                                setDate(true);
                                setEmployee(false);
                                setCombination(false);
                                setForm(<AddDateForm/>)
                              }}
                            >
                              <BsCheckLg className={date ? 'self-end' : 'hidden'}/>
                              <div className={`flex flex-col items-center ${date ? 'mb-4' : 'mb-0'}`}>
                                <CiCalendarDate size={40}/>
                                <p className='text-xs font-bold'>Date</p>
                              </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[90px] h-[90px] border border-gray-500 cursor-pointer'
                                onClick={()=>{
                                    setOption(false);
                                    setDate(false);
                                    setEmployee(true);
                                    setCombination(false);
                                    setForm(<AddEmployeeForm/>)
                                }}
                            >
                              <BsCheckLg className={employee ? 'self-end' : 'hidden'}/>
                              <div className={`flex flex-col items-center ${employee ? 'mb-4' : 'mb-0'}`}>
                                <AiOutlineUser size={40}/>
                                <p className='text-xs font-bold'>Employee</p>
                              </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[90px] h-[90px] border border-gray-500 cursor-pointer'
                            onClick={()=>{
                                setOption(false);
                                setDate(false);
                                setEmployee(false);
                                setCombination(true);
                                setForm(<AddCombinationForm/>)
                            }}
                            >
                              <BsCheckLg className={combination ? 'self-end' : 'hidden'}/>
                              <div className={`flex flex-col items-center ${combination ? 'mb-4' : 'mb-0'}`}>
                                <BsWindowSplit size={40}/>
                                <p className='text-xs font-bold '>Combination</p>
                              </div>
                            </div>
                          </div>
                          {form}
                      </div>
                        <div>
                        <div className='border border-gray-900 mb-4'/>
                        <div className="flex items-center justify-end gap-x-6 mb-10">
                          <div onClick={()=>{setOpen(false)}}>
                          <SecondaryButton text={"Cancel"}/>
                          </div>
                          <button
                            onClick={()=>{setOpen(false)}}
                            type="submit"
                            className="rounded-md mt-3 sm:mt-0 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Save
                          </button>
                        </div>
                        </div>
                      
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
