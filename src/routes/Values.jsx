import React, { useState } from 'react'
import Heading from '../components/Heading'
import ValuesHeading from '../components/ValuesHeading'
import ValueAccordion from '../components/ValueAccordion'
import AddValue from '../Slideovers/AddValue'


const Values = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ValuesHeading title={"Values"} setOpen={setOpen}/>
      <ValueAccordion/>
      <AddValue setOpen={setOpen} open={open} />
    </div>
  )
}

export default Values