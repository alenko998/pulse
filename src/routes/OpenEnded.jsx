import React, { useState } from 'react'
import OpenEndedHeading from '../components/OpenEndedHeading'
import OpenEndedContainer from '../components/OpenEndedContainer'
import AddOpenEndedQuestion from '../Slideovers/AddOpenEndedQuestion'

const OpenEnded = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <OpenEndedHeading title={"Survey questions > Open Ended"} setOpen={setOpen}/>
      <OpenEndedContainer/>
      <AddOpenEndedQuestion open={open} setOpen={setOpen}/>
    </div>
  )
}

export default OpenEnded