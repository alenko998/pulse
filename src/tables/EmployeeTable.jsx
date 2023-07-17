import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const employees = [
  { employee: 'Employee 1', employees: '0 employees', id: 1 },
  { employee: 'Employee 2', employees: '0 employees', id: 2 },
  { employee: 'Employee 3', employees: '0 employees', id: 3 },
  { employee: 'Employee 3', employees: '0 employees', id: 3 },
  { employee: 'Employee 3', employees: '0 employees', id: 3 },
  // More options...
];

export default function EmployeeTable() {
  return (
    <div>
      {employees.map((item) => (
        <div className='flex justify-around border border-gray-300 px-1 py-2 h-[48px]  items-center overflow-scroll' key={item.id}>
          <h1 className='block text-sm font-medium leading-6 text-gray-900 w-1/3 '>{item.employee}</h1>
          <h1 className='block text-sm font-medium leading-6 text-gray-900  w-1/3 '>{item.employees}</h1>
        </div>
      ))}
    </div>
  );
}

