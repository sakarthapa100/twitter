import React from 'react'
import Leftside from '../components/Leftside'
import Feed from '../components/Feed'
import Rightside from '../components/Rightside'
import { useSelector } from 'react-redux'
import useOtherUsers from '../../hooks/useOtherUser'
import useGetMyTweets from '../../hooks/useGetMyTweets'


const HomePage = () => {

const { user,otherUsers} = useSelector(store=> store.user)
useOtherUsers(user?._id)
useGetMyTweets(user?._id)

  return (
    <div className='flex justify-between   '>
      < Leftside />
< Feed />
< Rightside otherUsers={otherUsers} />

    </div>
  )
}

export default HomePage