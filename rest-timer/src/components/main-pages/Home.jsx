import React, { useState, useEffect }from "react";
 
export default function Home() {

  //variables
  const [IsRunning, setIsRunning] = useState(false)
  const [Seconds, setSeconds] = useState(0)
  const [Minutes, setMinutes] = useState(0)

  //timer tic function
  var temptimer;
  useEffect(() => {
    if(IsRunning) {
      temptimer = setInterval(() => {
        setSeconds(Seconds+1)
  
        if(Seconds === 59) {
          setMinutes(Minutes+1)
          setSeconds(0)
        }
      }, 1000)
  
      return () => clearInterval(temptimer)
    } 
  }, [IsRunning, Seconds])

  const StartStopBtnClickHandler = () => {
    if(!IsRunning)
      setIsRunning(true)
    else {
      setIsRunning(false)
      clearInterval(temptimer)
    }
    setSeconds(0)
    setMinutes(0)
  }

  //TODO: timer vole ten aby se nehybal 
  return (
    <div className=" flex justify-center items-center mt-60">
      <div className="h-32 w-64 flex flex-col justify-center items-center ">
        <div className="text-text-b text-8xl tracking-widest w-72"> {/*Text time Wrapper (require w-72)*/}
          {ConvertToTimeView(Minutes, Seconds)}
        </div>
        <p className="text-sm font-inter font-bold text-gray-300 mt-8">REMAINING</p>
        <div>
          <button 
            className={`rounded-3xl drop-shadow-lg m-2 w-96 h-16 font-inter font-bold text-xl
            ${IsRunning ? 'text-text-b' : 'text-white'}
            ${IsRunning ? 'bg-light-b' : 'bg-dark-b'}
            `}

            onClick={StartStopBtnClickHandler}
            >
            {IsRunning ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
}

const ConvertToTimeView = (Minutes, Seconds) => {
  if(Minutes < 10) Minutes = `0${Minutes}`
  if(Seconds < 10) Seconds = `0${Seconds}`
  return `${Minutes}:${Seconds}`
}