import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from "react-avatar";
import { useDispatch, useSelector } from 'react-redux';
import useGetProfile from '../../hooks/useGetProfile';

const Middle = () => {
  const { user,profile } = useSelector(store => store.user);
console.log(user)
const{id} = useParams()

  useGetProfile(id);

  return (
    <div className='w-[50%] border-l border-r border-gray-50 border-opacity-25 p-4'>
      <div>
        <div className='flex items-center py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <IoMdArrowBack size="24px" />
          </Link>
          <div className='ml-2'>
            {/* Check if profile exists before accessing its properties */}
            <h1 className='font-bold text-lg'>{profile?.fullname}</h1>
            <p className='text-gray-500 text-sm'>10 posts</p>
          </div>
        </div>
        <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
          <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
        </div>
        <div className='text-right m-4'>
          <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
        </div>
        <div className='m-4'>
          {/* Check if profile exists before accessing its properties */}
          <h1 className='font-bold text-xl'>{profile?.fullname}</h1>
          <p>{`@${profile?.username}`}</p>
        </div>
        <div className='m-4 text-sm'>
          <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
        </div>

        {/* Profile Stats */}
        <div className="mb-8">
          <div className="flex-1 text-center md:text-left mb-4">
            <p className="text-gray-400">Joined December 2022</p>
          </div>
          <div className="flex justify-center md:justify-start mb-4">
            <div className="mr-8">
              <p className="font-bold">32 Following</p>
            </div>
            <div>
              <p className="font-bold">16 Followers</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-evenly border-b border-gray-700 mb-8">
          <button className="py-2 px-4 font-bold text-blue-500 hover:text-blue-300">
            Posts
          </button>
          <button className="py-2 px-4 font-bold text-gray-400 hover:text-white">
            Replies
          </button>
          <button className="py-2 px-4 font-bold text-gray-400 hover:text-white">
            Highlights
          </button>
          <button className="py-2 px-4 font-bold text-gray-400 hover:text-white">
            Articles
          </button>
          <button className="py-2 px-4 font-bold text-gray-400 hover:text-white">
            Media
          </button>
          <button className="py-2 px-4 font-bold text-gray-400 hover:text-white">
            Likes
          </button>
        </div>

        {/* Post */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
              t
            </div>
            <div className="ml-4">
              <p className="font-bold">tommy selby</p>
              <p className="text-gray-400">@tommyselby9 · May 10</p>
            </div>
          </div>
          <p>We can't expect more from others than we give ourselves.</p>
        </div>
      </div>
    </div>
  );
}

export default Middle;
