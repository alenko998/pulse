import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
        <h1 className='font-light text-2xl'>{title}</h1>
        <div className='h-[1px] bg-black mt-8'></div>
    </div>
  )
}

export default Heading