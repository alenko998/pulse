import React from 'react'
import {SlArrowRight} from 'react-icons/sl'

const ValueAccordion = () => {
  return (
    <div class="w-full h-screen p-10">

      <div className='relative w-full overflow-hidden mx-auto'>
        <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
        <div className='bg-white h-12 w-full pl-5 flex items-center border border-gray-500'>
            <h1 className='text-lg font-semibold'>Value 1</h1>
        </div>
        {/* arrow */}
        <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 mt-1'>
            <SlArrowRight className='text-gray-500'/>
        </div>
        {/* content */}
        <div className='bg-gray-50  overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40'>
            <div className='p-4'>
                <p>Lorab doloribus enim amet, dolorum maiores ugit tempore magni et  perferendis consequatur pariatur tenetur placeat alias! Blanditiis porro, at qui explicabo quas amet dolores saepe, quam deleniti possimus sunt sed officiis.</p>
            </div>
        </div>
      </div>

      <div className='relative w-full overflow-hidden mx-auto'>
        <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
        <div className='bg-white h-12 w-full pl-5 flex items-center border border-gray-500'>
            <h1 className='text-lg font-semibold'>Value 2</h1>
        </div>
        {/* arrow */}
        <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 mt-1'>
            <SlArrowRight className='text-gray-500'/>
        </div>
        {/* content */}
        <div className='bg-gray-50  overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40'>
            <div className='p-4'>
                <p>Lorem ipsum dolor, sit amet consec tetur ciis.</p>
            </div>
        </div>
      </div>

      <div className='relative w-full overflow-hidden mx-auto'>
        <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
        <div className='bg-white h-12 w-full pl-5 flex items-center border border-gray-500'>
            <h1 className='text-lg font-semibold'>Value 3</h1>
        </div>
        {/* arrow */}
        <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90 mt-1'>
            <SlArrowRight className='text-gray-500'/>
        </div>
        {/* content */}
        <div className='bg-gray-50  overflow-scroll transition-all duration-500 max-h-0 peer-checked:max-h-40'>
            <div className='p-4'>
                <p>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil harum in nobis laboriosam iusto illum itaque provident veritatis expedita mollitia assumenda molestias consectetur deserunt iure, nostrum vel eaque quidem obcaecati culpa voluptates, dolorem corporis iste amet numquam. Est blanditiis et explicabo, laudantium ab doloribus enim amet, dolorum maiores magni impedit nihil animi suscipit, temporibus accusantium. Explicabo doloribus dolorem minima aspernatur, cum necessitatibus sed minus animi atque similique eaque nulla illum provident fugit tempore magni et repudiandae possimus nobis esse quae sunt velit maiores ea. Sed, ad itaque eaque assumenda earum tempora voluptatum quo, fugit, esse amet commodi repudiandae? Cumque, vitae. Mollitia perferendis consequatur pariatur tenetur placeat alias! Blanditiis porro, at qui explicabo quas amet dolores saepe, quam deleniti possimus sunt sed officiis.</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ValueAccordion