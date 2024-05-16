import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaList, FaUserCircle, FaEllipsisH } from "react-icons/fa";
import { IoBookmark, IoHome } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import "./Leftside.css";

const Leftside = () => {
  const data = {
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy1.png",
  };

  return (
    <div className="navigation-menu w-[20%] ">
      <div className="logo ml-2">
        <FaXTwitter />
      </div>
      <div className="my-4">
        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <IoHome size={20} className="mr-2" />
          <Link to="/" className="font-bold text-lg ml-2">Home</Link>
        </div>
        
        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaSearch size={"20"} className="mr-2" />
          </div>
          <Link to="/explore" className="font-bold text-lg ml-2">Explore</Link>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <div>
    <FaBell size={"20"} className="mr-2" />
  </div>
  <Link to="/notification" className="font-bold text-lg ml-2">Notifications</Link>
</div>

<div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <div>
    <FaEnvelope size={"20"} className="mr-2" />
  </div>
  <Link to="/messages" className="font-bold text-lg ml-2">Messages</Link>
</div>

<div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <div>
    <IoBookmark size={"20"} className="mr-2" />
  </div>
  <span className="font-bold text-lg ml-2">Grok</span>
</div>

<div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <div>
    <FaList size={"20"} className="mr-2" />
  </div>
  <span className="font-bold text-lg ml-2">Lists</span>
</div>


<div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaUserCircle size={"20"} className="mr-2" />
          </div>
          <Link to="/profile" className="font-bold text-lg ml-2">Profile</Link>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaEllipsisH size={"20"} className="mr-2" />
          </div>
          <span className="font-bold text-lg ml-2">More</span>
        </div>

        <button  className="post-button font-bold text-lg mb-5">Post</button>
        {data && (
          <Link
            to={`/profile/${data.username}`}
            className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
          >
            <div className='avatar hidden md:inline-flex'>
              <div className='w-8 rounded-full'>
                <img src={data.profileImg || "/avatar-placeholder.png"} alt="profile" />
              </div>
            </div>
            <div className='flex justify-between flex-1'>
              <div className='hidden md:block'>
                <p className='text-white font-bold text-sm w-20 truncate'>{data.fullName}</p>
                <p className='text-slate-500 text-sm'>@{data.username}</p>
              </div>
              <BiLogOut className='w-5 h-5 cursor-pointer' />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Leftside;
