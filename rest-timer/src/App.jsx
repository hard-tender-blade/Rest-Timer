import { useState } from "react";
import NawBar from "./components/NawBar";
import { Pages } from "./logic/Global";

export default function App() {
  const [CurrentPage, setCurrentPage] = useState(Pages.Home)

  return (
        <div className="App h-screen">
          <NawBar setCurrentPage={setCurrentPage}/>
          {CurrentPage}
        </div>
)}