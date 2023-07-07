import React, { useState } from 'react'
import EmployeesHeading from '../components/EmployeesHeading'
import Filter from '../components/Filter'
import DeleteEmployeeModal from '../modals/DeleteEmployeeModal'


const Employees = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <EmployeesHeading title="Employees"/>
        <Filter setOpen={setOpen}/>
        <DeleteEmployeeModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Employees