import React from 'react'
import Avatar from 'react-avatar';
import { FaImage } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { MdPoll } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Createpost = () => {
  return (
    <div className='w-[100%] ' >
      <div >
          <div className='flex items-center justify-between border-gray-200'>
<div className='font-bold text-gray-500 text-lg cursor-pointer hover:bg-gray-400 w-full text-center px-3 py-2 '> 
  <h3>For you</h3>
</div>
<div className='font-bold text-gray-500 text-lg cursor-pointer  hover:bg-gray-400 w-full text-center  px-3 py-2  '> 
  <h3>Following</h3>
</div>
      </div>
      <div className='m-4 '>
<div className='flex items-center'>
  <div>
    <Avatar src='https://pbs.twimg.com/profile_images/1190747917998546944/D3U5FNa7_400x400.jpg' size="40" round={true} />
  </div>
  <div>
  <input className="w-full outline-none border-none text-lg ml-2 bg-[#1D232A]" type="text" placeholder="What is happening?!" />



</div>

</div>
<div class="flex items-center my-4 border-b border-gray-300 ">
  <div class="mr-2">
    <FaImage />
  </div>
  <div class="ml-2">
    <MdGif />
  </div>
  <div class="ml-2">
    <MdPoll />
  </div>
  <div class="ml-2">
    <MdEmojiEmotions />
  </div>
  <div class="ml-2">
    <FaLocationDot />
  </div>

<button class="post-button font-bold text-lg bg-[#1da1f2] text-white px-4 py-1 rounded-full mt-4 ml-auto">Post</button>

</div>
      </div>
    </div>
      </div>
    
  )
}

export default Createpost