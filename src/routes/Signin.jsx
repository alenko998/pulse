import React from 'react'
import SigninForm from '../forms/SigninForm'

const Signin = () => {
  return (
    <div className='w-full h-screen  pl-40 pt-32 pb-32 pr-4'>
      <div className='w-full h-full  flex'> 
        <div className=' lg:w-2/5 h-full pt-8'> 
          {/* form */}
          <SigninForm/>
        </div>
        <div className='w-3/5 h-full  pt-8'> 
          <div className='border border-gray-500  h-full hidden lg:block'/>
        </div>
      </div>
    </div>
  )
}

export default Signin