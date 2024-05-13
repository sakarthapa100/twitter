import React from 'react'
import Leftside from '../components/Leftside'
import Feed from '../components/Feed'
import Rightside from '../components/Rightside'

const HomePage = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto '>
      < Leftside />
< Feed />
< Rightside />
    </div>
  )
}

export default HomePage