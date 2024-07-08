import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4 ">
          <Avatar
            src="https://media.licdn.com/dms/image/D5603AQFDLDXKp13IiA/profile-displayphoto-shrink_800_800/0/1715982366996?e=1721260800&v=beta&t=RSa5oSmaHbp4ceyY2T0-LjBNP370cX3cjFUWnYLijAg"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
             <div className="flex tems-center">
            <h1 className="font-bold">Utkarsh</h1>
            <p className="text-gray-500 text-sm mt-1 ml-1">@dhasmanautkarsh</p>
            </div>
            <div>
              <p>Hello developers lets connect and grow together</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2  hover:bg-[#1D9BF0] transition duration-500 hover:bg-opacity-50 rounded-full cursor-pointer">
                  <FaRegComment size="20px"/>
                </div>
                 
                 <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2  hover:bg-red-300 rounded-full cursor-pointer transition duration-500 hover:bg-opacity-50">
                  <CiHeart size="24px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2  hover:bg-yellow-300 rounded-full cursor-pointer transition duration-500 hover:bg-opacity-50">
                  <CiBookmark size="24px"/>
                  </div>
                
                <p>0</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Tweet;
