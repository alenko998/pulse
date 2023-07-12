import React, { useState } from 'react'
import EngagamentContainer from '../components/EngagamentContainer'
import EngagamentHeading from '../components/EngagamentHeading'
import AddEngagamentQuestion from '../Slideovers/AddEngagamentQuestion'

const Engagament = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <EngagamentHeading title={"Survey questions > Engagement"} setOpen={setOpen}/>
        <EngagamentContainer/>
        <AddEngagamentQuestion open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Engagament