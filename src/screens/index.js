import React from "react";

import Screen from "./Screen";
import Home from "./Home"
import Profile from "./Profile"

export const HomeScreen = () => (<Screen name="Home" ><Home/></Screen>);
export const PicsScreen = () => (<Screen name="Pics" ><Home/></Screen>);
export const ProfileScreen = () => (<Screen name="Profile" ><Profile/></Screen>);