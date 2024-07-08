import React from 'react'
import { FiHome } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import{Link} from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className='w-[20%]'>
      <div >
         <Link to="/">
          <img className='ml-4 mt-4 ' width={"24px"} src="https://i.etsystatic.com/47286684/r/il/d2aac4/5474882517/il_570xN.5474882517_rsqo.jpg" alt="Twitter logo"/>
         </Link>
         <div>
         <Link to="/" className='flex items-center mt-5 mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-500'>
             <div className='mr-1'>
             <FiHome size="24px" />
              </div>
              <h1 className='font-bold text-lg ml-2'>Home</h1>
            </Link>
            <div className='flex items-center mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-500'>
             <div className='mr-1' >
             <IoSearch size="24px"/>
              </div>
              <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className='flex items-center mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-500'>
             <div className='mr-1'>
             <RiNotification2Line  size="24px"/>
              </div>
              <h1 className='font-bold text-lg ml-2'>Notifications</h1>
            </div>
            <Link to="/profile" className='flex items-center mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-500'>
             <div className='mr-1'>
             <FaRegUser   size="24px"/>
              </div>
              <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </Link>
            <div className='flex items-center mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-500'>
             <div className='mr-1'>
             <FaRegBookmark size="24px"/>
              </div>
              <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div>
            <Link to="login" className='flex items-center mb-3 my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer transition duration-200'>
             <div className='mr-1'>
             <LuLogOut size="24px"/>
              </div>
              <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </Link>
            <button className='font-bold rounded-full bg-[#1D9BF0] w-full h-12 mt-4 ml-3 hover:bg-blue-500 hover:bg-opacity-85 transition duration-400 text-white'>Post</button>
         </div>
      </div>
    </div>
  )
}

export default LeftSideBar