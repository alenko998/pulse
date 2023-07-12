import React from 'react'
import Button from '../components/Button'


const SurveyContainer = () => {
  return (
    <div>
    <a href="engagament">
    <div className='w-full h-[150px] border rounded-xl border-gray-400 overflow-scroll mb-6'>
        <div className='w-full h-2/5 flex justify-between items-center'>
            <h1 className='text-lg font-semibold ml-4 mt-3'>Engagament</h1>
            <div className='mr-4 mt-2'>
              <Button text={"Manage"}/>
            </div>
        </div>
        <div className='border-b border-gray-400 mx-4 mt-2'/>
        <p className='mx-4 mt-2 text-sm text-gray-500'>Lorem ipsum dolor lorem100 sit amet lorem100 consectetur adipisicing elit. Tenetur, provident. Laudantium, distinctio, minima hic a dolorem dolore in eum velit dolor rem nisi nihil facilis tenetur, eveniet ducimus amet at.</p>
    </div>
    </a>

    <div className='w-full h-[150px] border rounded-xl border-gray-400 overflow-scroll mb-6'>
        <div className='w-full h-2/5 flex justify-between items-center'>
            <h1 className='text-lg font-semibold ml-4 mt-3'>Open-Ended Questions</h1>
            <div className='mr-4 mt-2'>
              <Button text={"Manage"}/>
            </div>
        </div>
        <div className='border-b border-gray-400 mx-4 mt-2'/>
        <p className='mx-4 mt-2 text-sm text-gray-500'>Lorem ipsum dolor sit lorem100 amet consectetur adipisicing elit. Rem voluptatibus vitae voluptatum? Quam, libero dolorum?</p>
    </div>

    </div>
  )
}

export default SurveyContainer