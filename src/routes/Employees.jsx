import React, { useState } from 'react'
import EmployeesHeading from '../components/EmployeesHeading'
import Filter from '../components/Filter'
import DeleteEmployeeModal from '../modals/DeleteEmployeeModal'
import ExportModal from '../modals/ExportModal'
import ImportModal from '../modals/ImportModal'
import AddEmployee from '../Slideovers/AddEmployee'


const Employees = () => {
  const [open, setOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openImport, setOpenImport] = useState(false);
  const [openAdd, setOpenAdd] = useState(false)
  return (
    <div>
        <EmployeesHeading title="Employees" setOpenExport={setOpenExport} setOpenImport={setOpenImport} setOpenAdd={setOpenAdd}/>
        <Filter setOpen={setOpen}/>
        <DeleteEmployeeModal open={open} setOpen={setOpen}/>
        <ExportModal open={openExport} setOpen={setOpenExport}/>
        <ImportModal open={openImport} setOpen={setOpenImport}/>
        <AddEmployee open={openAdd} setOpen={setOpenAdd}/>
    </div>
  )
}

export default Employees