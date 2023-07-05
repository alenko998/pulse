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


      <h1 className='text-2xl mb-4'>Organization</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-y-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <RiSettings3Fill size={40}/>
            <p className='font-bold'>Account</p>
            <p>Manage organization information</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <BiSolidPen size={40}/>
            <p className='font-bold'>Branding</p>
            <p>Manage branding</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <IoIosPeople size={40}/>
            <p className='font-bold'>Employees</p>
            <p>Manage employee records</p>
        </div>   <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <FiTarget size={40}/>
            <p className='font-bold'>Drivers/Targets</p>
            <p>Manage drivers/targets </p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GiTargeted size={40}/>
            <p className='font-bold'>Values</p>
            <p className='mx-10'>Manage organizational values and value question</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <AiFillPlusSquare size={40}/>
            <p className='font-bold'>Segments</p>
            <p>Manage segments </p>
        </div> 
      </div>

      <h1 className='text-2xl mb-4 mt-4'>Data Collection</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GiHamburgerMenu size={40}/>
            <p className='font-bold'>Survey questions</p>
            <p>Manage survey questions</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <GrSchedules size={40}/>
            <p className='font-bold'>Schedules</p>
            <p>Manage survey schedules </p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <MdPrivacyTip size={40}/>
            <p className='font-bold'>Data and Privacy</p>
            <p>Manage data and anonymity</p>
        </div> 
      </div>

      <h1 className='text-2xl mb-4 mt-4'>Configuration</h1>
      <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <FaTags size={40}/>
            <p className='font-bold'>Attributes</p>
            <p>Manage attributes</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <AiTwotoneLock size={40}/>
            <p className='font-bold'>Access Control</p>
            <p>Manage user access</p>
        </div>
        <div class="flex flex-col justify-center items-center h-[150px] w-[300px] border border-black">
            <BiSolidPlug size={40}/>
            <p className='font-bold'>Integrations</p>
            <p className='mx-10'>Manage integrations with external services</p>
        </div> 
      </div>



    </div>
  )
}

export default Organization