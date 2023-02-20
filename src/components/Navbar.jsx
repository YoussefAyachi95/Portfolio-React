import { NavLink } from "react-router-dom";
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)



  return (
    <div className='relative'>
        <header className='relative w-full py-4  border-b  border-gray-800/60 bg-gray-900 '>
            <div className='flex items-center justify-between fluid-container'>
                <NavLink to="/" className='text-2xl ml-16 p-2 hover:scale-125 hover:rotate-2 motion-safe:transition-transform focus:outline-none focus-visible:ring-2 ring-primary'>Ayachi<strong>.dev</strong></NavLink>
                <nav className='mr-16'>
                    <ul className='md:flex hidden items-center space-x-8'>
                        <li className='relative leading-none'>
                        <NavLink to="/about" className='p-1 group -m-1 flex items-center text-sm focus:outline-none focus-visible:ring-2 ring-primary
                         text-gray-300 hover:text-amber-500'>ABOUT</NavLink>
                        </li>
                        <li className='relative leading-none'>
                        <NavLink to="/contact" className='p-1 group -m-1 flex items-center text-sm focus:outline-none focus-visible:ring-2 ring-primary
                         text-gray-300 hover:text-amber-500'>CONTACT</NavLink>
                        </li>

                        <div className='flex space-x-2'>
                            <a href="https://de.linkedin.com/in/youssef-ayachi-0a097b229" target='_blank' className='p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary'>
                                <GrLinkedinOption/>
                            </a>
                            <a href="https://github.com/YoussefAyachi95" target='_blank' className='p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary'>
                               <GrGithub/>
                            </a>
                        </div>

                        <li className='relative'>
                            <button className='flex items-center p-1 -m-1  text-gray-200 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary motion-safe:transition-colors'>
                            <a href="mailto:youssef.ayachi@web.de"><MdEmail/></a>
                            </button>
                        </li>
                    </ul>
                    
                    {/* MOBILE */}
                    <div className="text-2xl" onClick={()=> setOpen(!open)}>
                    { open ? <AiOutlineClose className="text-gray-300 md:hidden absolute z-20"/> : <GiHamburgerMenu className="text-gray-300 md:hidden absolute z-20"/> }
                    

                    <ul id="background_colored" className={`md:hidden absolute flex flex-col items-center text-center bg-gray-900 mt-[-4rem] z-10 w-full h-screen py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                        <li className="text-amber-500 pt-5 " ><NavLink to="/about">ABOUT</NavLink></li>
                        <li className="text-amber-500 pt-5" ><NavLink to="/contact">CONTACT</NavLink></li>
                        <li className='relative'>
                            <button className='text-amber-500 m-3'>
                            <a href="mailto:youssef.ayachi@web.de"><MdEmail/></a>
                            </button>
                        </li>
                        <a  className="text-amber-500 m-3" href="https://de.linkedin.com/in/youssef-ayachi-0a097b229" target='_blank'>
                                <GrLinkedinOption/>
                        </a>
                        <a  className="text-amber-500 m-3 pt-5" href="https://github.com/YoussefAyachi95" target='_blank' >
                               <GrGithub/>
                        </a>
                    </ul>
                    </div>

                </nav>
            </div>
        </header>
    </div>
  )
}
