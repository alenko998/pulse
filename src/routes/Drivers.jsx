import React, { useState } from 'react'
import DriversHeading from '../components/DriversHeading'
import DriverAccordion from '../components/DriverAccordion'
import AddDriver from '../Slideovers/AddDriver'

const Drivers = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <DriversHeading title={"Drivers of engagement"} setOpen={setOpen}/>
        <DriverAccordion/>
        <AddDriver open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Drivers