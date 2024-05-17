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

      <div className="bg-[#1D232A] text-white p-4 rounded-lg max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-4">Who to follow</h2>

            {
              otherUsers?.map((user)=>{
                return(
                       <div key={user?._id} className="space-y-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="SportsCenter" className="rounded-full"/>
                        <div className="ml-3">
                            <p className="font-semibold">{user?.fullname} 🌍📺</p>
                            <p className="text-zinc-400">@{user?.username}</p>
                        </div>
                    </div>
                    <Link to={`/profile/${user?._id}`}>
    <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Profile</button>
</Link>

                    
                </div>
            
             
            </div>
                )
              })
            }
       
            <button className="w-full mt-4 py-2 text-blue-500">Show more</button>
        </div>

    </div>
  );
}

export default RightSidebar;
