import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const SurveyHeading = ({title}) => {
  return (
    <div>
        <div className='flex items-center'>
            <AiOutlineMenu size={26}/>
            <h1 className='font-light text-2xl ml-1'>{title}</h1>
        </div>
        <p className='ml-1 font-'>Manage questions used in your surveys.</p>
        <div className='h-[1px] bg-black mt-2'></div>
    </div>
  )
}

export default SurveyHeading