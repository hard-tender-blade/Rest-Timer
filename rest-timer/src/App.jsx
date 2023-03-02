import { useEffect, useState } from "react";
import NavBar from "./components/components/NavBar";
import Home from "./components/main-pages/Home";
import { Pages } from "./logic/Global";
import StorageManager from "./logic/LocalStorageManager";

//last denis commit
export default function App() {
  const [CurrentPage, setCurrentPage] = useState(Pages.Home)

  //new user trigger (create local storage for new user) 
  useEffect(StorageManager.CreateUserLocalStorage, [])

  return (
        <div className="App h-screen">
          <NavBar CurrentPage={CurrentPage} setCurrentPage={setCurrentPage}/>
          <Home CurrentPage={CurrentPage}/>
          {CurrentPage != Pages.Home ? CurrentPage : <></>}
        </div>
)}

