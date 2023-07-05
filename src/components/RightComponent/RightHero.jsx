import React, { useContext } from "react";
import { BsCloudRainFill, BsDot } from "react-icons/bs";
import { RiCelsiusFill } from "react-icons/ri";


const RightHero = () => {
    
  const today = Date().toString().split(" G")[0];

  const toCelsius = (f) => {
    return Math.floor(((f-32)*5)/9)
  }


  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="flex items-center justify-center gap-4">
        <BsCloudRainFill size={30} className="text-blue-300" />
        <div className="text-center">
          <h1 className="text-3xl ">Today</h1>
          <h3 className="text-[12px] font-thin text-gray-300">{today}</h3>
        </div>
      </div>

      <div className="my-8 w-full">
        <h1 className="flex items-center justify-center text-8xl font-thin ">
          28
          <RiCelsiusFill
            size={40}
            className="font-thin relative -top-3 left-3"
          />
        </h1>

        <h4 className="text-center my-3 font-light text-gray-400 text-sm">
          Berlin, Germany
        </h4>

        <h3 className="flex items-center justify-center gap-2 text-sm text-gray-400">
          Feels like 32 <BsDot size={20} /> Sunset 19:15
        </h3>
      </div>

      <div></div>
    </div>
  );
};

export default RightHero;

// feels_like
// 273.46
// grnd_level
// 1016
// humidity
// 83
// pressure
// 1016
// sea_level
// 1016
// temp
// 278.85
// temp_max
// 278.85
// temp_min
// 278.85
