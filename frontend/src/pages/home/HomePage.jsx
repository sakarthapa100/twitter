import React, { useEffect } from 'react'
import Leftside from '../components/Leftside'
import Feed from '../components/Feed'
import Rightside from '../components/Rightside'
import { useSelector } from 'react-redux'
import useOtherUsers from '../../hooks/useOtherUser'
import useGetMyTweets from '../../hooks/useGetMyTweets'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

const { user,otherUsers} = useSelector(store=> store.user)
const navigate = useNavigate()
useEffect(()=>{
  if(!user){
    navigate("/login")
  }
},[])

//hooks m
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