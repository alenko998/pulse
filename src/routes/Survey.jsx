import React, { useState } from 'react'

import SurveyTitleHeading from '../components/SurveyTitleHeading'
import NumberSquares from '../components/NumberSquares'
import Button from '../components/Button'
import QuestionComponent from '../components/QuestionComponent'
const Survey = () => {
  return (
    <div>
      <SurveyTitleHeading/>
        <div className='w-1/2 flex flex-col  ml-[100px] sm:ml-[550px] '>
          <QuestionComponent/>
          <QuestionComponent/>
          {/* buttons */}
          <div className='flex justify-between  w-4/6'>
            <Button text={"Previous"}/>
            <Button text={"Next"}/>
          </div>
        </div>
    </div>
  )
}


export default Survey