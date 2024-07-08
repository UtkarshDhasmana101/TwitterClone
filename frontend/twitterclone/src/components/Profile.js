import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from "react-router-dom";
import Avatar from 'react-avatar';

const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-300 hover:bg-gray-200 transition duration-500' >
      <div>
        <div className='flex items-center py-2'>
          <Link to ="/" className=' transition duration-500 p-2 rounded-full hover:bg-gray-100 cursor-pointer ' >
            <IoMdArrowRoundBack size="24px"/>
            </Link>
          <div>
             <h1 className='font-bold text-lg '>Utkarsh</h1>
          <p className='text-gray-500 text-sm'>10 posts</p>
          </div>      
        </div>
        <img src="https://pbs.twimg.com/profile_banners/1766443670436298752/1709991238/1500x500" alt="banner"/>
      <div className='absolute top-64 ml-2 border-4 border-white rounded-full'>
      <Avatar src="https://media.licdn.com/dms/image/D5603AQFDLDXKp13IiA/profile-displayphoto-shrink_800_800/0/1715982366996?e=1721260800&v=beta&t=RSa5oSmaHbp4ceyY2T0-LjBNP370cX3cjFUWnYLijAg" size="120" round={true} />
      </div>
      <div className='text-right m-4'>
        <button className='border-2 px-4 py-1 hover:bg-gray-300 rounded-full border-gray-400  transition duration-500'>Edit Profile</button>
      </div>
      <div className='m-4'>
        <h1 className='text-xl font-bold'>Utkarsh</h1>
        <p className=' text-l '>@DhasmanaUtkarsh101</p>
      </div>
      <div className='m-4 text-sm font-semibold'>
        <p>
        Second year student at UPES , Dehradun. The infinite 🌍 of coding fascinates me. VFX core member @Upes-ACM 👨🏻‍💻. Join me in my coding journey. Let's learn together🤩
        </p>
      </div>
      </div>
    </div>
  )
}

export default Profile