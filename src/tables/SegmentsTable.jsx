import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const options = [
  { option: 'Option 1', employees: '0 employees', id: 1 },
  { option: 'Option 2', employees: '0 employees', id: 2 },
  { option: 'Option 3', employees: '0 employees', id: 3 },
  { option: 'Option 4', employees: '0 employees', id: 4 },
  { option: 'Option 5', employees: '0 employees', id: 5 },
  // More options...
];

export default function SegmentsTable() {
  return (
    <div>
      {options.map((item) => (
        <div className='flex justify-between border border-gray-300 px-1 py-2 items-center overflow-scroll' key={item.id}>
          <h1 className='block text-sm font-medium leading-6 text-gray-900'>{item.option}</h1>
          <h1 className='block text-sm font-medium leading-6 text-gray-900'>{item.employees}</h1>
          <div className='flex items-center'>
            <AiOutlineEdit size={30} className='cursor-pointer mr-2'/>
            <AiOutlineDelete size={30} className='cursor-pointer' />
          </div>
        </div>
      ))}
    </div>
  );
}

