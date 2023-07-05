import React from 'react'
import RightNav from './RightNav'
import RightHero from './RightHero'

const RightComp = () => {
  return (
    <div className='p-5 h-full bg-[#0a1044] text-white'>

      <RightNav />

      <RightHero />

    </div>
  )
}

export default RightComp


//can use react-accessible-accordian package for accordion