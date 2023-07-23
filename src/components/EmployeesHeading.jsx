import React from 'react'
import Button from './Button'

const EmployeesHeading = ({title,setOpenExport,setOpenImport}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-light text-2xl mb-2'>{title}</h1>
            <div className='flex mb-1'>
                <div onClick={()=>{setOpenExport(true)}}>
                    <Button text="Export"/>
                </div>
                <div className='ml-3' onClick={()=>{setOpenImport(true)}}>
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