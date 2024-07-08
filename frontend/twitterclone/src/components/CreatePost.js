import React from 'react'
import Avatar from 'react-avatar'
import { GoImage } from "react-icons/go";

const CreatePost = () => {
  return (
    <div className='w-[100%]'>
      <div >
      <div className='flex items-center justify-evenly border-b border-gray-200'>
      <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
        <h1 className='font-semibold text-gray-600 text-lg '>For you</h1>
      </div>
      <div className='cursor-pointer  hover:bg-gray-200 w-full text-center px-4 py-3'>
        <h1 className='font-semibold text-gray-600 text-lg '>Following</h1>
        </div>
      </div>
    <div >
       <div className='flex items-center p-4'>
        <div>
        <Avatar src="https://media.licdn.com/dms/image/D5603AQFDLDXKp13IiA/profile-displayphoto-shrink_800_800/0/1715982366996?e=1721260800&v=beta&t=RSa5oSmaHbp4ceyY2T0-LjBNP370cX3cjFUWnYLijAg" size="40" round={true} />
        </div>
        <input className='ml-6 w-full outline-none border-none text-xl rounded-lg' type='text' placeholder='What is happening?'/>
       </div>
       <div className=' flex tems-center justify-between p-4 border-b border-gray-300'>
        <div className='mt-3'>
        <GoImage size="24px"/>
        </div>
        <button className='bg-[#1D9BF0] w-20 rounded-full px-2 py-2 text-lg text-white border-none'>
          Post
        </button>
        </div>
    </div>
      </div>
     
    </div>
  )
}

export default CreatePost