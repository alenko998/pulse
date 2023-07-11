import React, { useState } from 'react'
import DriversHeading from '../components/DriversHeading'
import DriverAccordion from '../components/DriverAccordion'
import AddDriver from '../Slideovers/AddDriver'
import EditDriver from '../Slideovers/EditDriver'

const Drivers = () => {
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
  return (
    <div>
        <DriversHeading title={"Drivers of engagement"} setOpen={setOpen}/>
        <DriverAccordion/>
        <AddDriver open={open} setOpen={setOpen}/>
        <EditDriver open={openEdit} setOpen={setOpenEdit}/>
    </div>
  )
}

export default Drivers