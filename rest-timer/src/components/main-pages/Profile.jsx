import React from "react";
import StorageManager from "../../logic/LocalStorageManager";

export default function Profile() {
  return (
    <div className="Profile">
      <div>Profile</div>
      <div>user data & settings</div>
      <div>
        {Object.entries(StorageManager.GetAllUserStoreageInfo()).map(e => <div> {e[0]} - {e[1]} </div> )}
      </div>
    </div>  
  );
}