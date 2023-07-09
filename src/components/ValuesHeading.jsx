import React from 'react'
import Button from './Button'

const ValuesHeading = ({title,setOpen}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-light text-2xl'>{title}</h1>
            <div className='ml-6' onClick={()=>{setOpen(true)}}>
                <Button text="Add value"/>
            </div>
        </div>
        <div className='h-[1px] bg-black mt-6'></div>
    </div>
  )
}

export default ValuesHeading