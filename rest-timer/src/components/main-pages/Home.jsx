import React, { useState, useEffect }from "react";

export default function Home() {
  ////TIMER SECTION////
  //variables
  const [IsRunning, setIsRunning] = useState(false)
  const [IsRestTime, setIsRestTime] = useState(false)
  const [Seconds, setSeconds] = useState(0)
  const [Minutes, setMinutes] = useState(0)

  //timer tic function
  var temptimer;
  useEffect(() => {
    if(IsRunning) {
      temptimer = setInterval(() => {
        TimerOneSecTic()
      }, 1000)
      return () => clearInterval(temptimer)
    } 
  }, [IsRunning, Seconds])

  //run every second
  const TimerOneSecTic = () => {
    //add ome sec
    setSeconds(Seconds+1)
  
    //add min
    if(Seconds === 59) {
      setMinutes(Minutes+1)
      setSeconds(0)
    }

    //time to stop work trigger 
    if(!IsRestTime && Seconds === 20)
      ShowNotification()

    if(IsRestTime && Seconds === 10)
      TimerStop()
  }

  //run timer button click event
  const TimerRunBtnClickHandler = () => {
    if(CheckNotificationPermission())
      IsRunning ? TimerStop() : TimerStart() 
  }

  //timer stoped
  const TimerStop = () => {
    setSeconds(0)
    setMinutes(0)
    setIsRunning(false)
    clearInterval(temptimer)
  }

  //timer started
  const TimerStart = () => {
    setSeconds(0)
    setMinutes(0)
    setIsRunning(true)
  }

  //notification comtroller | send notification | notification on click event
  const ShowNotification = () => {
        const options = {
          body: "Time to take a rest.\nClick to this notification for taking rest",
          icon: 'https://cdn.discordapp.com/attachments/971021678685618217/1071137960671596615/carti2.png',
          //image: 'https://cdn.discordapp.com/attachments/971021678685618217/1071137960671596615/carti2.png',
          silent: false,
          requireInteraction: true,
        }
        
        var notification = new Notification("Rest Timer", options);
    
        notification.onclick = () => {
          window.parent.focus()
          setIsRestTime(true)
          TimerStop()
          notification.close()
      }
  }

  //rest or work mode switcher
  const SwitchTimerMode = () => {
    setIsRestTime(!IsRestTime)
    TimerStop()
  }

  //get user permission
  const CheckNotificationPermission = () => {
    //default, granted, denied
    if(Notification.permission == "granted")
      return true
    else {
      Notification.requestPermission().then(permission => {
        if(permission == "denied")
          alert(`It needs permission to send notifications for the program to work correctly.
          You can enable them in the upper left corner of the browser by clicking on the (I) icon.`)
      })
      return false
    }
  }

  //convert ints to time format
  const ConvertToTimeFormat = (Minutes, Seconds) => {
    if(Minutes < 10) Minutes = `0${Minutes}`
    if(Seconds < 10) Seconds = `0${Seconds}`
    return `${Minutes}:${Seconds}`
  }
  ////PICTURES SECTION////

  ////HTML SECTION////
  return (
    <div className=" flex justify-center items-center mt-60">
      <div className="h-32 w-64 flex flex-col justify-center items-center ">
        <div className={`text-8xl tracking-widest w-72
        ${IsRestTime ? "text-green-500" : "text-text-b"}`}> {/*Text time Wrapper (require w-72)*/}
          {ConvertToTimeFormat(Minutes, Seconds)}
        </div>

        <p className="text-sm font-inter font-bold text-gray-700 mt-8">{IsRestTime ? "Rest-time" : "Work-time"}</p>

        <div className="button-wrapper flex">
          <button 
            className={`rounded-3xl drop-shadow-lg m-2 w-96 h-16 font-inter font-bold text-xl
            ${IsRunning ? 'text-text-b' : 'text-white'}
            ${IsRunning ? 'bg-light-b' : 'bg-dark-b'}
            `}
            onClick={() => {TimerRunBtnClickHandler(IsRunning)}}>
            {IsRunning ? 'Stop' : "Start"}
          </button>
          <button onClick={SwitchTimerMode}>Switch Mode</button>
        </div>
        
      </div>
    </div>
  );
}