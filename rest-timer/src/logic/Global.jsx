import React, { useState }from "react";
import About from "../components/About";
import HealthInfo from "../components/HealthInfo";
import Home from "../components/Home";
import Medals from "../components/Medals";
import NawBar from "../components/NawBar";
import Profile from "../components/Profile";

export const Pages = {
    Home: <Home/>,
    Medals: <Medals/>,
    HealthInfo: <HealthInfo/>,
    Profile: <Profile/>,
    About: <About/>
}