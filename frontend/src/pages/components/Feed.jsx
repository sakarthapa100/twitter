import React from 'react';
import Createpost from './Createpost';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';


const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);

  return (
    <div className='w-[50%] border-l border-r border-gray-50 border-opacity-25 p-4'>
      <div>
        <Createpost />
        {tweets?.map((tweet) => (
          <Tweet key={tweet?._id} tweet={tweet} />
        ))}
      
      </div>
    </div>
  );
};

export default Feed;