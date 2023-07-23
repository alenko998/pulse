import React, { useState } from 'react'
import EmployeesHeading from '../components/EmployeesHeading'
import Filter from '../components/Filter'
import DeleteEmployeeModal from '../modals/DeleteEmployeeModal'
import ExportModal from '../modals/ExportModal'
import ImportModal from '../modals/ImportModal'


const Employees = () => {
  const [open, setOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openImport, setOpenImport] = useState(false)
  return (
    <div>
        <EmployeesHeading title="Employees" setOpenExport={setOpenExport} setOpenImport={setOpenImport}/>
        <Filter setOpen={setOpen}/>
        <DeleteEmployeeModal open={open} setOpen={setOpen}/>
        <ExportModal open={openExport} setOpen={setOpenExport}/>
        <ImportModal open={openImport} setOpen={setOpenImport}/>
    </div>
  )
}

export default Employees