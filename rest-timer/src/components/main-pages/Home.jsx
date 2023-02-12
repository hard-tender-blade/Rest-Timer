import React, { useState, useEffect }from "react";
import StorageManager from "../../logic/LocalStorageManager";

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

  //run every second (event checker)
  const TimerOneSecTic = () => {
    //add ome sec
    setSeconds(Seconds+1)
    //add min
    if(Seconds === 59) {
      setMinutes(Minutes+1)
      setSeconds(0)
    }
    
    ////Events////
    //time to stop work trigger 
    if(!IsRestTime && Minutes === StorageManager.GetUserWorkSessionTime())
      ShowNotification()
    //time to stop rest trigger 
    if(IsRestTime && Minutes === StorageManager.GetUserRestSessionTime()) {
      TimerStop()
      StorageManager.AddOneRestSession()
    }
     
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

    //Adding time to all time rest/work
    if(IsRestTime)
      StorageManager.AddRestTime(Minutes)
    if(!IsRestTime)
      StorageManager.AddWorkTime(Minutes)  
      
    //Correct sessions check
    // from limit to  limit+10 is time zone for correct session  
    if(!IsRestTime && Minutes >= StorageManager.GetUserWorkSessionTime() 
    && Minutes <= StorageManager.GetUserWorkSessionTime() + 10)
      StorageManager.AddOneWorkCorrectSession()
    else if (Minutes > StorageManager.GetUserWorkSessionTime() + 10)
      StorageManager.AddOneWorkInCorrectSession() 
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
    if(Notification.permission === "granted")
      return true
    else {
      Notification.requestPermission().then(permission => {
        if(permission === "denied")
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


  ////HTML TITLE CHANGER////
  useEffect(() => {
    document.title = IsRestTime ? `Rest Timer | Resting - ${ConvertToTimeFormat(Minutes, Seconds)}` : `Rest Timer | Working - ${ConvertToTimeFormat(Minutes, Seconds)}`;
  }, [IsRestTime, Minutes, Seconds]);
  
  ////HTML SECTION////
  return (
    
    <div className=" flex justify-center items-center mt-24">
      <div className=" flex flex-col justify-center items-center ">
        {/* timer itself */}
        <div className="text-9xl font-inter font-regular m-auto spec-w">
          {ConvertToTimeFormat(Minutes, Seconds)}
        </div>

        {/* info text that shows current mode */}
        <p className="text-l font-inter font-bold text-grey-t">{IsRestTime ? "Rest-time" : "Work-time"}</p>


        {/* start/stop timer button*/}
        <button 
          className={`rounded-3xl mt-10 m-2 w-96 h-16 font-inter font-bold text-xl z-10
          ${IsRunning ? 'text-dark-b' : 'text-white'}
          ${IsRunning ? 'bg-light-b' : 'bg-dark-b'}
          ${IsRunning ? 'hover:bg-indigo-100 hover:drop-shadow-2xl' : 'hover:bg-indigo-500 hover:drop-shadow-2xl'} 
          transition duration-300 ease-in-out}
          `}
          onClick={() => {TimerRunBtnClickHandler(IsRunning)}}>
          {IsRunning ? 'Stop' : "Start"}
        </button>


        {/* mode switch button  */}
        <button 
          className={`rounded-3xl m-2 w-96 h-16 font-inter font-bold text-xl
          ${IsRestTime ? 'text-orange-500' : 'text-lime-500'}
          ${IsRestTime  ? 'bg-orange-50' : 'bg-lime-50'}
          ${IsRestTime  ? 'hover:bg-orange-100 hover:drop-shadow-2xl' : 'hover:bg-lime-100 hover:drop-shadow-2xl'}
          transition duration-300 ease-in-out
          `}
          onClick={SwitchTimerMode}
          >
          <abbr title={IsRestTime ? 'switch to work mode' : 'switch to rest mode'}>
            {IsRestTime ? 'Work' : 'Rest'}
          </abbr>
        </button>

        
      </div>
    </div>
  );
}