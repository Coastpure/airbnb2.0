import React from 'react'
import logo from '../assets/logo1.png'
import { BiWorld } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { FaUserAlt, FaSearch} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="border-b ">
            <div className='flex justify-between items-center sm:mx-6 md:mx-8 lg:mx-12'>
        {/* Left */}
        <div className=" h-20 flex">
            <img src={logo} className='object-cover -my-10' />
        </div>
        {/* Middle */}
        <div className="hidden lg:flex relative shadow-sm shadow-gray-400 border rounded-full justify-center items-center">
            <input type="search" placeholder='' className='p-2.5 w-[20rem] rounded-full outline-0' />
            <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                <button className=' w-full'>Place</button>
                <button className='border-l w-full'>Time</button>
                <button className='text-gray-600/60 border-l w-full pl-3'>Group Size</button>
            </div>
            <div className="bg-[#ff385c] p-2 rounded-full mr-2">
                <FaSearch className='text-white'/>
            </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
         
                <p className='text-[17px]'>Rent House</p>
           
            
            <div className="flex items-center mx-8 gap-1">
                <BiWorld className=''/>
                <div className="">EN</div>
            </div>
            <div className="flex items-center border rounded-full shadow-lg shadow-gray-300 px-3 py-1.5 gap-2 bg-[#ff385c] text-white font-bold hover:bg-[#bd7072] duration-100 ease-out text-[12px] sm:text-[15px]">
                <p>Sign in</p>
                <FaUserAlt className='text-[20px]' />
            </div>
        </div>
    </div>
    </div>

  )
}

export default Navbar