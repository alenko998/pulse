import React from 'react'
import Button from './Button'

const AttributesHeading = ({title,setOpen}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-light text-2xl mb-2'>{title}</h1>
            <div className='ml-6' onClick={()=>{setOpen(true)}}>
                <Button text="Add attribute"/>
            </div>
        </div>
        <div className='h-[1px] bg-black mt-6'></div>
    </div>
  )
}

export default AttributesHeading