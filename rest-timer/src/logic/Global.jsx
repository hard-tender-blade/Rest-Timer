import React, { useState }from "react";
import About from "../components/main-pages/About";
import HealthInfo from "../components/main-pages/HealthInfo";
import Home from "../components/main-pages/Home";
import Medals from "../components/main-pages/Medals";
import NawBar from "../components/components/NavBar";
import Profile from "../components/main-pages/Profile";

export const Pages = {
    Home: <Home/>,
    Medals: <Medals/>,
    HealthInfo: <HealthInfo/>,
    Profile: <Profile/>,
    About: <About/>
}