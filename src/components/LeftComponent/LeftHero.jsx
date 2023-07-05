import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Bg from './cardBg.jpeg'

const LeftHero = () => {

    const data = [
        {
            name:"Mumbai",
            country:"India"
        },
        {
            name:"Berlin",
            country:"Germany"
        },
        {
            name:"New York",
            country:"USA"
        }, 

    ]

  return (
    <div>

        <h1 className='text-4xl font-mono text-blue-800 tracking-widest'>
            <span className='font-thin'>Weather </span>
            <span className='font-bold'>Forecast</span>
        </h1>


        
        <div 
        className='flex item-center  my-6 text-blue-900  w-full justify-around bg-transparent'>
            
            {data.map( (map) => (
                <div 
                
                className='  h-[180px] w-[160px] rounded-2xl flex flex-col items-center justify-center p-3 cursor-pointer transition duration-300 hover:-translate-y-3 shadow-2xl'
                
                style={{backgroundImage: `url(${Bg})`}}>
                    
                    <h1 className='text-3xl font-normal my-2'>{map.name}</h1>
                    <h2 className='font-light'>{map.country}</h2>
                
                </div>
            ))}

            <div 
            className='h-[180px] w-[160px] rounded-2xl flex flex-col items-center justify-center p-5 border-[1px] border-black gap-3 cursor-pointer shadow-2xl'>

                <AiOutlinePlus size={30}/>
                <h1 className='text-lg'>Add City</h1>
            </div>
            
        </div>

        

    </div>
  )
}

export default LeftHero