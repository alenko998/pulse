import React from 'react'
import NumberSquares from '../components/NumberSquares'

const QuestionComponent = () => {
  return (
    <div className='mb-10'>
          {/* question */}
          <h1 className='font-light text-4xl'>How likely is it that you would recommend Organization
            as a place to work?</h1>
            <div className='flex flex-col  w-4/6 mt-6 '>
               <NumberSquares/>
               <div className='flex justify-between mt-1'>
                <p className='text-sm text-gray-400'>Not at all likely </p>
                <p className='text-sm text-gray-400'>Extremely likely</p>
               </div>
            </div>
            <div className='border border-gray-500 w-4/6 h-[100px] mt-6'>
              <p className='text-sm text-gray-400 ml-1 mt-1'>What is it that makes you give this score? Write a comment here to explain (optional).</p>
            </div>
    </div>
  )
}

export default QuestionComponent