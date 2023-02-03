import React, { useState } from "react";
import { Pages } from "../logic/Global";

export default function NawBar(props) {
  const [currentPage, setCurrentPage] = useState(Pages.Home);

  return (
    <div className="w-screen bg-white">
      <div className="max-w-7xl m-auto h-20 flex justify-around text-base text-grey-t font-intertight">
        <button
          className={currentPage === Pages.Home ? "font-inter font-bold text-text-b" : ""}
          onClick={() => {
            props.setCurrentPage(Pages.Home);
            setCurrentPage(Pages.Home);
          }}
        >
          Home
        </button>
        <button
          className={currentPage === Pages.Medals ? "font-inter font-bold text-text-b" : ""}
          onClick={() => {
            props.setCurrentPage(Pages.Medals);
            setCurrentPage(Pages.Medals);
          }}
        >
          Medals
        </button>
        <button
          className={currentPage === Pages.HealthInfo ? "font-inter font-bold text-text-b" : ""}
          onClick={() => {
            props.setCurrentPage(Pages.HealthInfo);
            setCurrentPage(Pages.HealthInfo);
          }}
        >
          Health info
        </button>
        <button
          className={currentPage === Pages.Profile ? "font-inter font-bold text-text-b" : ""}
          onClick={() => {
            props.setCurrentPage(Pages.Profile);
            setCurrentPage(Pages.Profile);
          }}
        >
          Profile
        </button>
        <div className="w-96"></div>
        <button
          className={currentPage === Pages.About ? "font-inter font-bold text-text-b" : ""}
          onClick={() => {
            props.setCurrentPage(Pages.About);
            setCurrentPage(Pages.About);
          }}
        >
          About
        </button>
      </div>
    </div>
  );
}
