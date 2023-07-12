import React, { useState } from 'react'
import EngagamentContainer from '../components/EngagamentContainer'
import EngagamentHeading from '../components/EngagamentHeading'
import AddEngagamentQuestion from '../Slideovers/AddEngagamentQuestion'
import EditEngagamentQuestion from '../Slideovers/EditEngagamentQuestion'

const Engagament = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
  return (
    <div>
        <EngagamentHeading title={"Survey questions > Engagement"} setOpen={setOpen}/>
        <EngagamentContainer/>
        <AddEngagamentQuestion open={open} setOpen={setOpen}/>
        <EditEngagamentQuestion open={openEdit} setOpen={setOpenEdit}/>
    </div>
  )
}

export default Engagament