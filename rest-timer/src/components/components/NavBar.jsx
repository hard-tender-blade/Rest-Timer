import React, { useState } from "react";
import { Pages } from "../../logic/Global";

export default function NavBar(props) {
  const [currentPage, setCurrentPage] = useState(Pages.Home);

  const NavBarBtnClick = (Page) => {
    props.setCurrentPage(Page);
    setCurrentPage(Page);
  }

  const GetButtonName = (Page) => {
    for (const [key, value] of Object.entries(Pages)) {
      if(value === Page) return key
    }
  }

  const NavBarBtn = (Page) => {
    return (
      <>
        <div className="w-24 m-auto text-center">

          <button
            className={`${currentPage === Page ? "font-inter font-medium text-text-b" : "" } hover:text-dark-b transition-colors duration-200 ease-in-out`}
            onClick={() => {NavBarBtnClick(Page)}}>
            {Page == Pages.HealthInfo ? "Health info" : GetButtonName(Page)}
          </button>

          <div className={`rounded w-18 h-1 bg-dark-b ${currentPage === Page ? "" : "invisible"}`}/>
        </div>
      </>

    )
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-2xl m-auto h-20 flex justify-around text-base text-grey-t font-intertight">
        {NavBarBtn(Pages.Home)}
        {NavBarBtn(Pages.Medals)}
        {NavBarBtn(Pages.HealthInfo)}
        {NavBarBtn(Pages.Profile)}
        <div className="w-64"></div>
        {NavBarBtn(Pages.About)}
      </div>
    </div>
  );
}