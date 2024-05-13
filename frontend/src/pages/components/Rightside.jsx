import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

import { Link } from 'react-router-dom';

const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-800 rounded-full outline-none w-full'>
        <CiSearch size="20px" color="#fff" />
        <input className="w-full outline-none border-none text-lg ml-2 bg-[#1D232A] text-white" type="text" placeholder="Search" />

      </div>
      <div className='p-4 bg-gray-800 rounded-2xl my-4'>
        <h1 className='font-bold text-lg text-white'>Who to follow</h1>
        {
          <div className='flex items-center justify-between my-3'>
            <div className='flex items-center'>
              <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
              <div className='ml-2'>
                <h1 className='font-bold text-white'>gg</h1>
                <p className='text-sm text-white'>fe</p>
              </div>
            </div>
            
            <div>
              <button className='px-4 py-1 bg-white text-black rounded-full'>Profile</button>
            </div>
            
          </div>
        }
      </div>
    </div>
  )
}

export default RightSidebar;
