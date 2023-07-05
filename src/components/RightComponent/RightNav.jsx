import React from 'react'
import profileBg from './profile_image_short.jpg'

const RightNav = () => {
  return (
    <div className='p-7 flex items-center justify-between'>

        <div className='flex'>

            <h1 className='font-mono mx-2'>Notifications</h1>

            <div className='bg-red-500 rounded-lg h-6 w-6 flex items-center justify-center'>4</div>

            <h1 className='font-mono mx-8'>Places</h1>

        </div>

        <div className='h-12 w-12 rounded-xl' 
            style={{backgroundImage: `url(${profileBg})` , backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>

            <div className='h-4 w-4 bg-red-500 rounded-full relative float-right -top-1 left-1'>
            </div>

        </div>

    </div>
  )
}

export default RightNav