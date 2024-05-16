import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightSidebar = ({otherUsers}) => {
  return (
    <div className="bg-[#1D232A] text-white min-h-screen p-4 w-[24%]   rounded-lg">
      <div className="bg-[#1D232A] rounded-lg  p-4 mb-4">
        <div className="flex items-center p-2 bg-[#1D232A] rounded-lg ">
          <CiSearch size="20px" color="#fff" />
          <input className="w-full outline-none border-none text-lg ml-2 bg-[#1D232A]" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="bg-[#1D232A] rounded-lg  p-4 mb-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Subscribe to Premium</h2>
          <p className="text-[#5C6674] ">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ">Subscribe</button>
      </div>
      <div className="bg-[#1D232A] rounded-lg  p-4">
        <h2 className="text-lg font-semibold mb-4">Trends for you</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Technology - Trending</h3>
          <p>#React</p>
          <p className="text-[#5C6674] ">31.5K posts</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Sports - Trending</h3>
          <p>#RCBvDC</p>
          <p className="text-[#5C6674]  ">56.8K posts</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Trending in Nepal</h3>
          <p>#NepalCricket</p>
          <p className="text-[#5C6674] ">90K posts</p>
        </div>
        <div>
          <h3 className="font-semibold">Sports - Trending</h3>
          <p>#Kohli</p>
          <p className="text-[#5C6674] ">90K posts</p>
        </div>
      </div>

  

    </div>
  );
}

export default RightSidebar;
