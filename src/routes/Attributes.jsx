import React, { useState } from 'react'
import AttributesHeading from '../components/AttributesHeading'
import AttributeAccordion from '../components/AttributeAccordion'
import AddAttribute from '../Slideovers/AddAttribute'

const Attributes = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AttributesHeading title={"Attributes"} setOpen={setOpen}/>
      <AttributeAccordion/>
      <AddAttribute open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Attributes