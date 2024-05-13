import React from "react";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaList,
  FaUserCircle,
  FaEllipsisH,
} from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

import { FaXTwitter } from "react-icons/fa6";

import "./Leftside.css";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu w-[20%] ">
      <div className="logo ml-2">
        <FaXTwitter />
      </div>
      <div className="my-4">
        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <IoHome size={"20"} className="mr-2" />
          </div>
          <span className="font-bold text-lg ml-2">Home</span>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaSearch size={"20"} className="mr-2" />
          </div>

          <span className="font-bold text-lg ml-2">Explore</span>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaBell size={"20"} className="mr-2" />
          </div>
          <span className="font-bold text-lg ml-2">Notifications</span>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaEnvelope size={"20"} className="mr-2" />
          </div>
          <span className="font-bold text-lg ml-2">Messages</span>
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
          <span className="font-bold text-lg ml-2">Profile</span>
        </div>

        <div className="flex items-center my-2 px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-opacity-75 cursor-pointer">
          <div>
            <FaEllipsisH size={"20"} className="mr-2" />
          </div>
          <span className="font-bold text-lg ml-2">More</span>
        </div>

        <button className="post-button font-bold text-lg ">Post</button>
      </div>
    </div>
  );
};

export default NavigationMenu;
