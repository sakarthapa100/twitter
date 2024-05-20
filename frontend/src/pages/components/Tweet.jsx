import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart, CiBookmark } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT, USER_API_END_POINT,timeSince } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";

import { getRefresh } from "../../redux/tweetSlice"; // Ensure this import is correct

const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch(); // Correct usage

  
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res?.data?.success) {
        console.log(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTweetHandler = async (id) => {
    try {
      const res = await axios.delete(
        `${TWEET_API_END_POINT}/delete/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res?.data?.success) {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const bookmarkHandler = async (id) => {
    try {
      const res = await axios.put(
        `${USER_API_END_POINT}/bookmark/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res?.data?.success) {

        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1190747917998546944/D3U5FNa7_400x400.jpg"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.fullname}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username}`}</p>
            </div>
            <div>
              <p>{tweet.description}</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => likeOrDislikeHandler(tweet?._id)}
                  className="p-2 hover:bg-pink-200 rounded-full cursor-pointer"
                >
                  <CiHeart size="24px" />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div onClick={()=> bookmarkHandler(tweet?._id)} className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size="24px" />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              {user?._id === tweet?.userId && (
                <div className="flex items-center">
                  <div
                    onClick={() => deleteTweetHandler(tweet?._id)}
                    className="p-2 hover:bg-red-300 rounded-full cursor-pointer"
                  >
                    <MdOutlineDeleteOutline size="24px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
