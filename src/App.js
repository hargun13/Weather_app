import React, { useContext , createContext } from "react";
import LeftComp from "./components/LeftComponent/LeftComp";
import RightComp from "./components/RightComponent/RightComp";


function App() {


  return (


      <div className="md:flex h-screen w-screen">

          <div className="md:w-[65%] h-full">
              <LeftComp />
          </div>

          <div className="md:w-[35%] h-full">
              <RightComp />
          </div>
        
      </div>

  );
}

export default App;

