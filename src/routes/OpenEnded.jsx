import React, { useState } from 'react'
import OpenEndedHeading from '../components/OpenEndedHeading'
import OpenEndedContainer from '../components/OpenEndedContainer'
import AddOpenEndedQuestion from '../Slideovers/AddOpenEndedQuestion'
import EditOpenEndedQuestion from '../Slideovers/EditOpenEndedQuestion'

const OpenEnded = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
  return (
    <div>
      <OpenEndedHeading title={"Survey questions > Open Ended"} setOpen={setOpen}/>
      <OpenEndedContainer/>
      <AddOpenEndedQuestion open={open} setOpen={setOpen}/>
      <EditOpenEndedQuestion open={openEdit} setOpen={setOpenEdit}/>
    </div>
  )
}

export default OpenEnded