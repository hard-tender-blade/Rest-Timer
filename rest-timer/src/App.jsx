import { useState } from "react";
import NavBar from "./components/components/NavBar";
import { Pages } from "./logic/Global";

//last denis commit
export default function App() {
  const [CurrentPage, setCurrentPage] = useState(Pages.Home)

  return (
        <div className="App h-screen">
          <NavBar CurrentPage={CurrentPage} setCurrentPage={setCurrentPage}/>
          {CurrentPage}
        </div>
)}