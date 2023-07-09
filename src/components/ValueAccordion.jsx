import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import ToggleButton from './ToggleButton';


const ValueAccordion = () => {



  return (
    <div className="w-full h-screen p-10">

      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold">Value 1</h1>
        </div>
        {/* arrow */}
        <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
          <SlArrowRight className={`text-gray-500`} />
        </div>
        {/* content */}
        <div className={`bg-gray-50 overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40`}>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet accusantium voluptates enim expedita quaerat quas deleniti laborum aliquam qui!
            </p>
          </div>
        </div>
        {/* button */}
        <button className="absolute top-3 right-16 z-50 mt-[3px]">
          <ToggleButton />
        </button>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold">Value 2</h1>
        </div>
        {/* arrow */}
        <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
          <SlArrowRight className={`text-gray-500`} />
        </div>
        {/* content */}
        <div className={`bg-gray-50 overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40`}>
          <div className="p-4">
            <p>
              daj
            </p>
          </div>
        </div>
        {/* button */}
        <button className="absolute top-3 right-16 z-50 mt-[3px]">
          <ToggleButton />
        </button>
      </div>
    </div>
  );
};

export default ValueAccordion;
