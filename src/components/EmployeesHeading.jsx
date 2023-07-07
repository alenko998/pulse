import React from 'react'
import Button from './Button'

const EmployeesHeading = ({title}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-light text-2xl'>{title}</h1>
            <div className='flex'>
                <Button text="Export"/>
                <div className='ml-3'>
                    <Button text="Import"/>
                </div>
                <div className='ml-6'>
                    <Button text="Add employee"/>
                </div>
            </div>
        </div>
        <div className='h-[1px] bg-black mt-6'></div>
    </div>
  )
}

export default EmployeesHeading