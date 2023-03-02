import React from "react"
import RestTimerLogo from "./../../resources/RestTimerLogo.png"
 
export default function About() {
   return (
     <div className="About flex flex-col items-center justify-center ">
        <div className="ProfilesWrapper flex w-5/6  h-96 mt-24">

            <div className="DenisWrapper  w-1/3 h-full">
              <a href="https://github.com/DenisMatsenko" target={"_blank"} className="flex justify-center items-center h-full w-full">
                <img src="https://avatars.githubusercontent.com/u/92087058?v=4" alt="DenisPFP"
                className="h-5/6 rounded-full"/>
              </a>
            </div>

            <div className="RestTimerWrapper w-1/3 h-full flex justify-center items-center">
              <a href="https://github.com/DenisMatsenko/Rest-Timer" className="w-full h-full flex justify-center items-center"  target={"_blank"}>
                <img src={RestTimerLogo} alt="DenisPFP"
                className="h-4/6 rounded-full"/>
              </a>
            </div>

            <div className="MatejWrapper w-1/3 h-full">
              <a href="https://github.com/mateyy11" target={"_blank"} className="w-full h-full flex justify-center items-center">
                <img src="https://avatars.githubusercontent.com/u/35971285?v=4" alt="MatejPFP"
                className="h-5/6 rounded-full"/>
              </a>
            </div>
        </div>

        <div className="ContentWrapper w-4/6 mt-20 text-center  text-3xl">
          <h1 className="text-5xl">Rest Timer</h1>
          <p className="mt-6">
            Here will be some cool text about creating rest timer and how we do it and for what it even is 
          </p>

          <p className="mt-6">
            Here will be some cool text about creating rest timer and how we do it and for what it even is 
          </p>

          <p className="mt-6">
            Here will be some cool text about creating rest timer and how we do it and for what it even is 
          </p>
          
        </div>
     </div>  
   );
}