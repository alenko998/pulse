import React, { useState } from 'react'
import ValuesHeading from '../components/ValuesHeading'
import ValueAccordion from '../components/ValueAccordion'
import AddValue from '../Slideovers/AddValue'
import EditValue from '../Slideovers/EditValue'


const Values = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)
  return (
    <div>
      <ValuesHeading title={"Values"} setOpen={setOpen}/>
      <ValueAccordion/>
      <AddValue  open={open} setOpen={setOpen}/>
      <EditValue open={openEdit} setOpen={setOpenEdit}/>
    </div>
  )
}

export default Values