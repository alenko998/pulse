import React from 'react'
import Heading from '../components/Heading'
import {BiImage} from 'react-icons/bi'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'


const Branding = () => {
  return (
    <div className=''>
      <Heading title="Branding"/>
      <div className='flex flex-col justify-center items-center mt-5 mx-auto w-[650px]'>
        <p>Add a custom image to all survey-related e-mails and the frst page of the survey. This will allow
        consistent company branding across all communications sent via Pulse.</p>
        <div className='flex flex-col mt-4 w-2/3 h-[250px] border border-black items-center pt-2'>
            <BiImage size={130}/>
            <p className='font-bold'>Drag and drop to upload</p>
            <p>or <span>browse</span> to choose a file</p>
            <p>size up to 5 MB</p>
        </div>
      </div>
      <div className='flex w-1/5 mx-auto items-center justify-between mt-8'>
        <SecondaryButton text={"Cancel"}/>
        <Button text={"Save"}/>
      </div>
    </div>
  )
}

export default Branding