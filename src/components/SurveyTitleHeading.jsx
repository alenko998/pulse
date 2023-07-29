import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'

const SurveyTitleHeading = () => {
  return (
    <div className='flex flex-col px-40 py-5'>
        <div className='flex '>
            <div className='w-1/3 border border-gray-500 flex'>
                <div class="flex justify-center items-center w-12 h-12 rounded-full border border-black bg-black mx-1 my-4">
                    <i class="fas fa-check text-white"><AiOutlineCheck size={30}/></i>
                </div>
                <div className='flex flex-col justify-center ml-1'>
                    <h1 className='font-bold'>Question group 1</h1>
                    <p className='text-xs text-gray-400'>Question group 1 description goes here </p>
                </div>
            </div>
            <div className='w-1/3 border border-gray-500  flex'>
                <div class="flex justify-center items-center w-12 h-12 rounded-full border border-black bg-white mx-1 my-4">
                    {/* <i class="fas fa-check text-white"><AiOutlineCheck size={30}/></i> */}
                    <p>02</p>
                </div>
                <div className='flex flex-col justify-center ml-1'>
                    <h1 className='font-bold'>Question group 2</h1>
                    <p className='text-xs text-gray-400'>Question group 2 description goes here</p>
                </div>
            </div>
            <div className='w-1/3 border border-gray-500  flex'>
                <div class="flex justify-center items-center w-12 h-12 rounded-full border border-black bg-white mx-1 my-4">
                    {/* <i class="fas fa-check text-white"><AiOutlineCheck size={30}/></i> */}
                    <p>03</p>
                </div>
                <div className='flex flex-col justify-center ml-1'>
                    <h1 className='font-bold'>Question group 3</h1>
                    <p className='text-xs text-gray-400'>Question group 3 description goes here</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SurveyTitleHeading