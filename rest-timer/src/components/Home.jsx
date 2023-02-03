import React, { useState, useEffect }from "react";
 
export default function Home() {

  //variables
  const [StartTimer, setStartTimer] = useState(false)
  const [Seconds, setSeconds] = useState(0)
  const [Minutes, setMinutes] = useState(0)

  //timer tic function
  var temptimer;
  useEffect(() => {
    if(StartTimer) {
      temptimer = setInterval(() => {
        setSeconds(Seconds+1)
  
        if(Seconds === 59) {
          setMinutes(Minutes+1)
          setSeconds(0)
        }
      }, 1000)
  
      return () => clearInterval(temptimer)
    } 
  }, [StartTimer, Seconds])

  //timer start from 00:00
  const TimerStart = () => {
    setStartTimer(true)
    setSeconds(0)
    setMinutes(0)
  } 

  //timer stop to 00:00
  const TimerStop = () => {
    setStartTimer(false)
    setSeconds(0)
    setMinutes(0)
    clearInterval(temptimer)
  }

  return (
    <div className=" flex justify-center items-center mt-60">
      <div className="h-32 w-64 flex flex-col justify-center items-center ">
        <div className=" text-text-b text-8xl"> {/*Text time Wrapper*/}
          {Minutes}:{Seconds}
        </div>
        <p className="text-sm font-inter font-bold text-gray-300 mt-8">REMAINING</p>
        <div>
          <button className="rounded-3xl drop-shadow-lg m-2 w-96 h-16 bg-dark-b font-inter font-bold text-white text-xl" onClick={TimerStop}>Stop</button>
          <button className="rounded-3xl drop-shadow-lg m-2 w-96 h-16 bg-light-b font-inter font-bold text-text-b text-xl" onClick={TimerStart}>Start</button>
        </div>
      </div>
    </div>
  );
}