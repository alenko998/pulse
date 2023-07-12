import React, { useState } from 'react';
import { SlArrowRight } from 'react-icons/sl';
import ToggleButton from './ToggleButton';


const DriverAccordion = () => {



  return (
    <div className="w-full h-screen p-10 sm:pl-20 sm:pr-20 xl:pl-60 xl:pr-60 ">
     

      <div className='mb-6'>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold underline">Accomplishment</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-lg font-semibold">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Challenging</h1>
        </div>
        {/* arrow */}
        <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
          <SlArrowRight className={`text-gray-500`} />
        </div>
        {/* content */}
        <div className={`bg-gray-50 overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40`}>
          <div className="p-4 ml-4">
            <p>
              daj
            </p>
          </div>
        </div>
        {/* button */}
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      </div>

      <div className='mb-6'>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold underline">Freedom of Opinion</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-lg font-semibold">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Manager</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Team</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      </div>

      <div className='mb-6'>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold underline">Growth </h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-lg font-semibold">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Learning</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Mentoring</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      </div>

      <div className='mb-6'>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-lg font-semibold underline">Meaningful Work  </h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-lg font-semibold">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Fit</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mx-auto">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="bg-white h-12 w-full pl-5 flex items-center border border-gray-500">
          <h1 className="text-md ml-4 font-medium underline">Signifcance</h1>
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
        <h1 className="absolute top-3 right-16 z-50 text-md font-medium">
          X.Y
        </h1>
      </div>
      </div>


    </div>
  );
};

export default DriverAccordion;