import React from 'react'
import RightSidebar from './Rightside'
import Rightside from './Rightside'
import Leftside from './Leftside'
import Middle from './Middle'


const profile = () => {
  return (
    <div className='flex justify-between  mx-auto'>
      <Leftside className="w-[20%]" />


<Middle className="w-[50%] " />


      <Rightside className="w-[20%]" />
    </div>
  )
}

export default profile