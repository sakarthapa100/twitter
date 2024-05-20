import React from "react";

import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaBell, FaEnvelope, FaList, FaUserCircle, FaEllipsisH } from "react-icons/fa";
import { IoBookmark, IoHome } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import "./Leftside.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { getUser } from "../../redux/userSlice";

const Leftside = () => {
  const { user ,profile} = useSelector(store => store.user);
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const data = {
  
    profileImg: "/avatars/boy1.png",
  };
  const logoutHandler = async()=>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`)
      dispatch(getUser(null))
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navigation-menu w-[20%] ">
      <div className="logo ml-2">
        <FaXTwitter />
      </div>
      <div className="my-4">
      <Link to="/" className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <IoHome size={20} className="mr-2" />
  <div className="font-bold text-lg ml-2">Home</div>
</Link>

        
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


<Link to={`/profile/${user?._id}` }className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
  <div>
    <FaUserCircle size={"20"} className="mr-2" />
  </div>
  <h3 className="font-bold text-lg ml-2">Profile</h3>
</Link>
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
            <div onClick={logoutHandler} className='flex justify-between flex-1'>
              <div className='hidden md:block'>
                <p className='text-white font-bold text-sm w-20 truncate'>Logout</p>
              
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
