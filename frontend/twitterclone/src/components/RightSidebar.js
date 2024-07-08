import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

const RightSidebar = () => {
  return (
    <div className='w-[20%]' >
      <div className=' flex item-center p-2 bg-gray-100 rounded-full outline-none'>
        <CiSearch size="24px"/>
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4  bg-gray-100 rounded-2xl my-5'>
            <h1 className='font-bold text-lg'>Who to follow</h1>
        <div className='flex items-center justify-between my-5'>
           <div className='flex'>
            <div>
              <Avatar src="https://media.licdn.com/dms/image/D4D03AQGiWFdJE5NgSw/profile-displayphoto-shrink_100_100/0/1689494662908?e=1719446400&v=beta&t=A99I3OtGarHUi7OWfeu1W8_cfOKJXQeltY1W6EVrD-M" size="40" round={true} />
            </div>
           
           <div className='ml-2'>
            <h1 className='font-bold'>Navya</h1>
            <p className='text-sm'>@NavyaRaina999</p>
           </div>
           
           </div>
           <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
           </div>
           
        </div>
        <div className='flex items-center justify-between my-5'>
           <div className='flex'>
            <div>
              <Avatar src="https://media.licdn.com/dms/image/D4D03AQHYVqa8rKWRxA/profile-displayphoto-shrink_800_800/0/1715791755869?e=1721260800&v=beta&t=Sey8UdBI1DK3Re5oEBtu87BN1RPebJ8164lhjUS85ew" size="40" round={true} />
            </div>
           
           <div className='ml-2'>
            <h1 className='font-bold'>Siddharth</h1>
            <p className='text-sm'>@VermaSiddharth123</p>
           </div>
           
           </div>
           <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
           </div>
           
        </div>
        <div className='flex items-center justify-between my-5'>
           <div className='flex'>
            <div>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lzsy-CLX5modf7mkOmOT9GUqAhXYT5XOsBczuFwaxA&s" size="40" round={true} />
            </div>
           
           <div className='ml-2'>
            <h1 className='font-bold'>Elon</h1>
            <p className='text-sm'>@MuskElon121</p>
           </div>
           
           </div>
           <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
           </div>
           
        </div>
        <div className='flex items-center justify-between my-5'>
           <div className='flex'>
            <div>
              <Avatar src="https://media.licdn.com/dms/image/D5603AQGvFlFTaW1UDQ/profile-displayphoto-shrink_200_200/0/1714072903729?e=1721260800&v=beta&t=yZPEzyu706FlrIDTnUIxYAufcgEmn06Ps8VPPwr8iFY" size="40" round={true} />
            </div>
           
           <div className='ml-2'>
            <h1 className='font-bold'>Devansh</h1>
            <p className='text-sm'>@Devansh101</p>
           </div>
           
           
           </div>
           <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
           </div>
           
        </div>
        <div className='flex items-center justify-between my-5'>
           <div className='flex'>
            <div>
              <Avatar src="https://media.licdn.com/dms/image/D4D03AQE3u30Sd0qI1w/profile-displayphoto-shrink_100_100/0/1675506754486?e=1721260800&v=beta&t=6i_-QIukTJT76v7SsgVCZ22XaXEoN7lpeu97V55Nu98" size="40" round={true} />
            </div>
           
           <div className='ml-2'>
            <h1 className='font-bold'>Paritosh </h1>
            <p className='text-sm'>@juyalparitosh999</p>
           </div>
           
           
           </div>
           <div>
            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
           </div>
           
        </div>
      </div>
    </div>
  )
}

export default RightSidebar