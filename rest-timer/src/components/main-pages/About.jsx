import React from "react"
// import RestTimerLogo from "./../../resources/RestTimerLogo.png"
 
export default function About() {
   return (
     <div className="About flex flex-col items-center justify-center max-w-7xl m-auto">
      <div className="h-3"></div>
        <div className="ProfilesWrapper flex justify-center items-center w-5/6  h-96">

            <div className="DenisWrapper  w-64 h-64">
              <a href="https://github.com/DenisMatsenko" className="flex justify-center items-center h-full w-full">
                <img src="https://avatars.githubusercontent.com/u/92087058?v=4" alt="DenisPFP"
                className="h-5/6 rounded-full"/>
              </a>
            </div>

            <div className="RestTimerWrapper w-24 flex justify-center items-center"></div>

            <div className="MatejWrapper w-64 h-64">
              <a href="https://github.com/mateyy11" className="w-full h-full flex justify-center items-center">
                <img src="https://avatars.githubusercontent.com/u/35971285?v=4" alt="MatejPFP"
                className="h-5/6 rounded-full"/>
              </a>
            </div>
        </div>

        <div className="ContentWrapper w-4/6 text-left  text-xl">
          <h1 className="font-inter text-4xl font-bold text-text-b">Rest Timer</h1>
          <p className="mt-6 font-inter text-text-b text-xl text-justify">
            Rest-Timer is a web application designed to help monitor and manage work time effectively.
          </p>

          <p className="mt-6 font-inter text-text-b text-xl text-justify">
            Developed by Matěj T. Moravec and Denis Matsenko, this app promotes the importance of taking regular breaks to maintain physical and mental health.
          </p>
          <p className="mt-6 font-inter text-text-b text-xl text-justify">
            With Rest-Timer, users can set customizable timers to take breaks, stretch, and rest their brains. The app aims to increase productivity, reduce stress and ultimately improve overall well-being.
          </p>
          
        </div>
     </div>  
   );
}