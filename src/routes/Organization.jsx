import React from 'react'
import {RiSettings3Fill} from 'react-icons/ri'
import {BiSolidPen} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import {FiTarget} from 'react-icons/fi'
import {GiTargeted} from 'react-icons/gi'
import {AiFillPlusSquare} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrSchedules} from 'react-icons/gr'
import {MdPrivacyTip} from 'react-icons/md'
import {FaTags} from 'react-icons/fa'
import {AiTwotoneLock} from 'react-icons/ai'
import {BiSolidPlug} from 'react-icons/bi'

const Organization = () => {
  return (
    <div className='w-full h-full pl-20  md:pl-36 '>


      <h1 className='font-light text-2xl mb-4'>Organization</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <RiSettings3Fill size={40}/>
            <p className=''>Account</p>
            <p className='text-sm text-gray-500'>Manage organization information</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <BiSolidPen size={40}/>
            <p className=''>Branding</p>
            <p className='text-sm text-gray-500'>Manage branding</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <IoIosPeople size={40}/>
            <p className=''>Employees</p>
            <p className='text-sm text-gray-500'>Manage employee records</p>
        </div>   <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <FiTarget size={40}/>
            <p className=''>Drivers/Targets</p>
            <p className='text-sm text-gray-500'>Manage drivers/targets </p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GiTargeted size={40}/>
            <p className=''>Values</p>
            <p className='text-sm text-gray-500'>Manage organizational values</p>
            <p className='text-sm text-gray-500'>and value question</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <AiFillPlusSquare size={40}/>
            <p className=''>Segments</p>
            <p className='text-sm text-gray-500'>Manage segments </p>
        </div> 
      </div>

      <h1 className='font-light text-2xl mb-4 mt-4'>Data Collection</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GiHamburgerMenu size={40}/>
            <p className='ß'>Survey questions</p>
            <p className='text-sm text-gray-500'>Manage survey questions</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GrSchedules size={40}/>
            <p className='ß'>Schedules</p>
            <p className='text-sm text-gray-500'>Manage survey schedules </p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <MdPrivacyTip size={40}/>
            <p className='ß'>Data and Privacy</p>
            <p className='text-sm text-gray-500'>Manage data and anonymity</p>
        </div> 
      </div>

      <h1 className='font-light text-2xl mb-4 mt-4'>Configuration</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <FaTags size={40}/>
            <p className=''>Attributes</p>
            <p className='text-sm text-gray-500'>Manage attributes</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <AiTwotoneLock size={40}/>
            <p className=''>Access Control</p>
            <p className='text-sm text-gray-500'>Manage user access</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <BiSolidPlug size={40}/>
            <p className=''>Integrations</p>
            <p className='text-sm text-gray-500'>Manage integrations with</p>
            <p className='text-sm text-gray-500'>external services</p>
        </div> 
      </div>



    </div>
  )
}

export default Organization