import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { FaImage } from "react-icons/fa";
import { MdGif, MdPoll, MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';
import { TWEET_API_END_POINT } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getRefresh, getIsActive } from '../../redux/tweetSlice';

const Createpost = () => {
  const [description, setDescription] = useState("");
  const{user} = useSelector(store=>store.user  )
  const {isActive} = useSelector(store=> store.tweet)
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${TWEET_API_END_POINT}/create`, {
        description, id:user._id
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      dispatch(getRefresh());
      if (res.data.success) {
        console.log(res.data.message); // Assuming you have some logging mechanism
      }
    } catch (error) {
      console.error(error);
    }
    setDescription("");
  };
  const foryouHandler=()=>{
dispatch(getIsActive(true))
  }
  const followingHandler=()=>{
dispatch(getIsActive(false))
  }

  return (
    <div className='w-[100%]'>
      <div>
      <div className='flex items-center justify-between border-gray-200'>
      <div onClick={foryouHandler} className={`${isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} font-bold text-gray-500 text-lg cursor-pointer hover:bg-gray-400 w-full text-center px-3 py-2`}>

    <h3>For you</h3>
  </div>
  <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600" : "border-b-4 border-transparent"} font-bold text-gray-500 text-lg cursor-pointer hover:bg-gray-400 w-full text-center px-3 py-2`}>
    <h3>Following</h3>
  </div>
</div>

        <div className='m-4'>
          <div className='flex items-center'>
            <div>
              <Avatar src='https://pbs.twimg.com/profile_images/1190747917998546944/D3U5FNa7_400x400.jpg' size="40" round={true} />
            </div>
            <div>
              <input value={description} onChange={(e) => setDescription(e.target.value)} className="w-full outline-none border-none text-lg ml-2 bg-[#1D232A]" type="text" placeholder="What is happening?!" />
            </div>
          </div>
          <div className="flex items-center my-4 border-b border-gray-300">
            <div className="mr-2">
              <FaImage />
            </div>
            <div className="ml-2">
              <MdGif />
            </div>
            <div className="ml-2">
              <MdPoll />
            </div>
            <div className="ml-2">
              <MdEmojiEmotions />
            </div>
            <div className="ml-2">
              <FaLocationDot />
            </div>
            <button onClick={submitHandler} className="post-button font-bold text-lg bg-[#1da1f2] text-white px-4 py-1 rounded-full mt-4 ml-auto">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
