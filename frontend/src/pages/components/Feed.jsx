import React from 'react'
import Createpost from './Createpost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className='w-[50%]  border-l  border-r border-gray-50  border-opacity-25 p-4'>
<div>
   <Createpost />
   <Tweet />
   <Tweet />
   <Tweet />
   <Tweet />
   <Tweet />
</div>
    </div>
  )
}

export default Feed