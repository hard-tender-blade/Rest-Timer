import React from "react";
import { Pages } from "../../logic/Global";

export default function NavBar(props) {
  return (
    <div className="w-screen bg-white">
      <div className="max-w-screen-2xl m-auto h-20 flex justify-around text-base text-grey-t font-intertight">

        {/* Home page button */}
        <div className="w-24 m-auto text-center" onClick={() => {props.setCurrentPage(Pages.Home)}}>
          <button className={props.CurrentPage === Pages.Home ? "font-inter font-medium text-text-b" : ""}>Home</button>
          <div className={`rounded w-18 h-1 bg-dark-b ${props.CurrentPage === Pages.Home ? "" : "invisible"}`} />
        </div>

        {/* Megals page button */}
        <div className="w-24 m-auto text-center" onClick={() => {props.setCurrentPage(Pages.Medals)}}>
          <button className={props.CurrentPage === Pages.Medals ? "font-inter font-medium text-text-b" : ""}>Medals</button>
          <div className={`rounded w-18 h-1 bg-dark-b ${props.CurrentPage === Pages.Medals ? "" : "invisible"}`} />
        </div>

        {/* Health Info page button */}
        <div className="w-24 m-auto text-center" onClick={() => {props.setCurrentPage(Pages.HealthInfo)}}>
          <button className={props.CurrentPage === Pages.HealthInfo ? "font-inter font-medium text-text-b" : ""}>Health info</button>
          <div className={`rounded w-18 h-1 bg-dark-b ${props.CurrentPage === Pages.HealthInfo ? "" : "invisible"}`} />
        </div>

        {/* Profile page button */}
        <div className="w-24 m-auto text-center" onClick={() => {props.setCurrentPage(Pages.Profile)}}>
          <button className={props.CurrentPage === Pages.Profile ? "font-inter font-medium text-text-b" : ""}>Profile</button>
          <div className={`rounded w-18 h-1 bg-dark-b ${props.CurrentPage === Pages.Profile ? "" : "invisible"}`} />
        </div>

        {/* Empty spase between pages buttons */}
        <div className="w-96"></div>

        {/* About page button */}
        <div className="w-24 m-auto text-center" onClick={() => {props.setCurrentPage(Pages.About)}}>
          <button className={props.CurrentPage === Pages.About ? "font-inter font-medium text-text-b" : ""}>About</button>
          <div className={`rounded w-18 h-1 bg-dark-b ${props.CurrentPage === Pages.About ? "" : "invisible"}`} />
        </div>

      </div>
    </div>
  );
}
