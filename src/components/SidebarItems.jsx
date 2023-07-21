import React, { Fragment } from 'react'
import { SlArrowRight } from 'react-icons/sl';
import {CgInsights} from 'react-icons/cg'
import {AiOutlineDatabase} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {GoOrganization} from 'react-icons/go'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const SidebarItems = () => {
    const navigation = [
        { name: 'Insights', href: 'one', icon: HomeIcon, current: false },
        { name: 'Organization', href: 'organization', icon: UsersIcon, current: false },
        { name: 'Data Collection', href: 'employees', icon: UsersIcon,  current: false },
        { name: 'Configuration', href: 'account', icon: UsersIcon, current: false },
      ]
      
      const organizationPages = [
        { name: 'Account', href: 'account', icon: FolderIcon, current: false },
        { name: 'Branding', href: 'branding', icon: CalendarIcon, current: false },
        { name: 'Employees', href: 'employees', icon: DocumentDuplicateIcon, current: false },
        { name: 'Drivers/Targets', href: 'drivers', icon: ChartPieIcon, current: false },
        { name: 'Values', href: 'values', icon: HomeIcon, current: false },
      ]
      
      const dataCollectionPages = [
        { name: 'Survey questions', href: 'surveyQuestions', icon: CalendarIcon, current: false },
      ]
      
      const configurationPages = [
        { name: 'Attributes', href: 'attributes', icon: CalendarIcon, current: false },
        { name: 'Integrations', href: 'Integrations', icon: ChartPieIcon, current: false },
      ]
      
  return (
    <Fragment>
                 <li key={navigation[0].name}>
                        <a
                          onClick={()=>{navigation[0].current===true}}
                          href={navigation[0].href}
                          className={classNames(
                            navigation[0].current
                              ? 'bg-indigo-600 text-black'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <CgInsights size={50}/>
                          {/* accordion */}
                          <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox"  
                                   className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                            />
                            <div className='bg-indigo-600 h-12 w-full pl-4 flex items-center'>
                           {navigation[0].name}
                            </div>
                            {/* content */}
                            <div className='bg-indigo-600 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-0'>
                              <div className='p-4'> 
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
             
                      <li key={navigation[1].name}>
                        <a
                         onClick={()=>{navigation[0].current===false; navigation[1].current===true; }}
                          href={navigation[1].href}
                          className={classNames(
                            navigation[0].current
                              ? 'bg-indigo-600 text-white'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <GoOrganization size={40}/>
                          {/* accordion */}
                          <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox"  
                                   className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                            />
                            <div className='bg-indigo-600 h-12 w-full pl-5 flex items-center'>
                              {navigation[1].name}
                            </div>
                            {/* arrow icon */}
                            <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                              <SlArrowRight className={`text-white`} />
                            </div>
                            {/* content */}
                            <div className='bg-indigo-600 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-44'>
                              <div className='p-4 ml-1'>
                               {organizationPages.map((page)=>(
                                <a href={page.href} className=''><p className='mb-4'>{page.name}</p></a>
                               ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
             
                      <li key={navigation[2].name}>
                        <a
                          href={navigation[2].href}
                          className={classNames(
                            navigation[0].current
                              ? 'bg-indigo-600 text-white'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >

                          <AiOutlineDatabase size={40} className='mt-1'/>
                          {/* accordion */}
                          <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox"  
                                   className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                            />
                            <div className='bg-indigo-600 h-12 w-full pl-5 flex items-center'>
                              {navigation[2].name}
                            </div>
                            {/* arrow icon */}
                            <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                              <SlArrowRight className={`text-white`} />
                            </div>
                            {/* content */}
                            <div className='bg-indigo-600 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                              <div className='ml-1 p-4'>
                                {dataCollectionPages.map((page)=>(
                                  <a href={page.href} className=''><p className='mb-4'>{page.name}</p></a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
             
                      <li key={navigation[3].name}>
                        <a
                          href={navigation[3].href}
                          className={classNames(
                            navigation[0].current
                              ? 'bg-indigo-600 text-white'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          
                          <AiOutlineSetting size={40} className='mt-1'/>
                          {/* accordion */}
                          <div className='relative w-[400px] overflow-hidden'>
                            <input type="checkbox"  
                                   className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                            />
                            <div className='bg-indigo-600 h-12 w-full pl-5 flex items-center'>
                              {navigation[3].name}
                            </div>
                            {/* arrow icon */}
                            <div className="absolute top-3 mt-1 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                              <SlArrowRight className={`text-white`} />
                            </div>
                            {/* content */}
                            <div className='bg-indigo-600 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                              <div className='p-4'>
                              {configurationPages.map((page)=>(
                                  <a href={page.href} className=''><p className='mb-4'>{page.name}</p></a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
    </Fragment>
  )
}

export default SidebarItems