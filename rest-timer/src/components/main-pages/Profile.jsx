import React from "react";
import StorageManager from "../../logic/LocalStorageManager";
import Pfp from "./../../resources/def.webp";
import Cat from "./../../resources/cat.png";

export default function Profile() {    
  
    const handleEditProfileClick = () => {
      alert("To ještě není fíčura");
    };
  
    const handleLogoutClick = () => {
      alert("This doesn't work yet!");
    };

  return (
    <div className="Profile">
      <div className="h-10"></div>
      <div className="max-w-7xl m-auto px-4">
        <h2 className="font-inter text-4xl font-bold text-text-b">
          Profile overview
        </h2>
        <div className="flex mt-8">
          <div className="column-ww ">
            <img src={Pfp} alt="pfp" className="rounded-full" />
            <p className="mt-5 text-2xl font-bold font-inter text-text-b">Jan Novák</p>
            <p className="font-intertight text-grey-t">Since 2.3. 2023</p>
            <input
              type="button"
              value="Edit profile"
              className="mt-16 w-full h-14 font-inter font-bold bg-light-b text-lg rounded-3xl"
              onClick={handleEditProfileClick}
            />
            <input
              type="button"
              value="Log-out"
              className="mt-3 w-full h-14 font-inter font-bold text-red-500 border border-red-500 rounded-3xl text-lg"
              onClick={handleLogoutClick}
            />
          </div>

          <div className="ml-36 w-full">
            <div className="border border-black rounded-3xl h-60">
              <div className="flex h-full ml-14 mt-7">
                <div className="">
                  <h3 className="font-inter text-3xl font-bold text-text-b">User info</h3>
                  <p className="mt-3 font-inter font-medium text-text-b font-lg">Rest ession Time: {StorageManager.GetUserWorkSessionTime()} minutes</p>
                  <p className="font-inter font-medium text-text-b font-lg">Work session Time: {StorageManager.GetUserRestSessionTime()} minutes</p>

                  <p className="mt-3 font-inter font-medium text-text-b font-lg">Total time spent resting: {StorageManager.GetUserAllTimeInRest()} minutes</p>
                  <p className="font-inter font-medium text-text-b font-lg">Total time spent working: {StorageManager.GetUserAllTimeInWork()} minutes</p>
                </div>
              </div>

            </div>
            <div className="bg-dark-b rounded-3xl h-40 mt-6">
              <div className="ml-14 pt-7">
                <div className="">
                <h3 className="font-inter text-3xl font-bold text-white">Break overview</h3>
                <p className="mt-3 font-inter font-medium text-white font-lg">Correct pauses: {StorageManager.GetUserCountOfCorrectWorkSession()}</p>
                <p className="font-inter font-medium text-white font-lg">Skipped breaks: {StorageManager.GetUserCountOfInCorrectWorkSession()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <div>
          <p>Session Time: {StorageManager.GetUserWorkSessionTime()}</p>
        </div> */}

                    {/* <div>
              {Object.entries(StorageManager.GetAllUserStoreageInfo()).map(e => <div> {e[0]} - {e[1]} </div> )}
            </div>   */}

      </div>
    </div>  
  );
}