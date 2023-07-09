import React from 'react'
import Heading from '../components/Heading'
import {BiImage} from 'react-icons/bi'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'


const Branding = () => {
  return (
    <div className=''>
      <Heading title="Branding"/>
      <div className='flex flex-col justify-center items-center mt-5 mx-auto w-[450px] sm:w-[650px]'>
        <p>Add a custom image to all survey-related e-mails and the frst page of the survey. This will allow
        consistent company branding across all communications sent via Pulse.</p>
        <div className='flex flex-col mt-4 w-2/3 h-[250px] border border-black items-center pt-2'>
            <BiImage size={130}/>
            <p className='font-bold'>Drag and drop to upload</p>
            <p>or <span className='text-blue-500 underline hover:cursor-pointer'>browse</span> to choose a file</p>
            <p className='text-sm text-gray-500'>size up to 5 MB</p>
        </div>
      <div className='flex flex-col sm:flex-row  justify-around  mt-8 w-full'>
        <SecondaryButton text={"Cancel"}/>
        <Button text={"Save"}/>
      </div>
      </div>

    </div>
  )
}

export default Branding