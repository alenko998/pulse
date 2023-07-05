import React, { useState } from 'react'
import Heading from '../components/Heading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import AccountForm from '../forms/AccountForm'
import AccountModal from '../modals/AccountModal'


const Account = () => {
  const title = "Account";
  const firstButton = "Upload logo";
  const secondButton = "Remove logo";
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/* heading */}
        <Heading title={title}/> 
      {/* image and buttons */}
        <div className='flex flex-col  w-[300px] mx-auto mt-5'>
          <ImagePlaceholder/>
          <div className='flex justify-between'>
            <Button text={firstButton}/>
            <Button text={secondButton}/>
          </div>
        </div>
      {/* form */}
        <AccountForm/>
        {/* buttons */}
        <div className='flex justify-center items-center mt-12 w-1/2 mx-auto'>
          <div className='mr-5'>
            <SecondaryButton text="cancel"/>
          </div>
          <div className='ml-5'>
            <Button text="Save"/>
          </div>
        </div>

        <div className='h-[1px] bg-black mt-4'></div>
        <h1 className='text-2xl font-light'>Delete account</h1>
        <p>If you want to remove your organization and all its data, you <span onClick={()=>{setOpen(true)}} className='text-blue-500 underline hover:cursor-pointer'>can delete your account</span>. Note that this action cannot be undone, and it will permanently delete all data from your account and your access
        will be blocked immediately.</p>

        <AccountModal open={open} setOpen={setOpen}/>



    </div>
  )
}

export default Account