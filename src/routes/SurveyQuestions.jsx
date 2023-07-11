import React from 'react'
import SurveyHeading from '../components/SurveyHeading'
import SurveyContainer from '../components/SurveyContainer'

const SurveyQuestions = () => {
  return (
    <div>
        <SurveyHeading title={"Survey questions"}/>
        <div className='p-10 sm:pl-20 sm:pr-20 xl:pl-60 xl:pr-60'>
        <SurveyContainer/>
        </div>

    </div>
  )
}

export default SurveyQuestions
