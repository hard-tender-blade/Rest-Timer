import React, { useState } from "react";
import { Pages } from "../../logic/Global";

export default function NavBar(props) {
  const [currentPage, setCurrentPage] = useState(Pages.Home);

  //TODO chage code here
  return (
    <div className="w-screen bg-white">
      <div className="max-w-screen-2xl m-auto h-20 flex justify-around text-base text-grey-t font-intertight">
        <div className="w-24 m-auto text-center">

          <button
            className={`${currentPage === Pages.Home ? "font-inter font-medium text-text-b" : ""} hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {
              props.setCurrentPage(Pages.Home);
              setCurrentPage(Pages.Home);
            }}
            >
            Home
          </button>
          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Pages.Home ? "" : "invisible"}`} />

        </div>
        <div className="w-24 m-auto text-center">

          <button
            className={`${currentPage === Pages.Medals ? "font-inter font-medium text-text-b" : ""} hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {
              props.setCurrentPage(Pages.Medals);
              setCurrentPage(Pages.Medals);
            }}
            >
            Medals
          </button>
          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Pages.Medals ? "" : "invisible"}`} />

        </div>
        <div className="w-24 m-auto text-center">
          <button
            className={`${currentPage === Pages.HealthInfo ? "font-inter font-medium text-text-b" : ""} hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {
              props.setCurrentPage(Pages.HealthInfo);
              setCurrentPage(Pages.HealthInfo);
            }}
            >
            Health info
          </button>
          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Pages.HealthInfo ? "" : "invisible"}`} />

        </div>
        <div className="w-24 m-auto text-center">
          <button
            className={`${currentPage === Pages.Profile ? "font-inter font-medium text-text-b" : ""} hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {
              props.setCurrentPage(Pages.Profile);
              setCurrentPage(Pages.Profile);
            }}
            >
            Profile
          </button>
          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Pages.Profile ? "" : "invisible"}`} />

        </div>
        <div className="w-96"></div>

          <div className="w-24 m-auto text-center">
          <button
            className={`${currentPage === Pages.About ? "font-inter font-medium text-text-b" : ""} hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {
              props.setCurrentPage(Pages.About);
              setCurrentPage(Pages.About);
            }}
            >
            About
          </button>
          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Pages.About ? "" : "invisible"}`} />

        </div>
      </div>
    </div>
  );
}
