import React from 'react'
import IntegrationsHeading from '../components/IntegrationsHeading'
import {BsSlack} from 'react-icons/bs'

const Integrations = () => {
  return (
    <div className=''>
      <IntegrationsHeading/>
      <div className='w-full h-full pl-20  md:pl-36 mt-20'>
        <div class="flex flex-col h-[250px] w-[300px] border border-black ">
          <div className='w-full h-2/5 flex flex-col items-center justify-center'>
            <p className='font-bold text-3xl'>Slack</p>
            <p>Not connected</p>
          </div>
          <div className='h-[1px] bg-black'/>
          <div className='w-full h-3/5 flex flex-col justify-center items-center'>
            <BsSlack size={40}/>
            <p className='mt-2'>Get notifcations on<br/>
            results and feedback</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integrations