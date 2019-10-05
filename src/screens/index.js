import React from "react";

import Screen from "./Screen";
import Home from "./Home"
import Profile from "./Profile"
import Login from "./Auth/Login"

// App navigation
export const HomeScreen = () => (<Screen name="Home" ><Home/></Screen>);
export const PicsScreen = () => (<Screen name="Pics" ><Home/></Screen>);
export const ProfileScreen = ({ navigation }) => (<Screen  name="Profile" ><Profile navigation={navigation}/></Screen>);

// Auth navigation
export const LoginScreen = ({ navigation }) => (<Login navigation={navigation}/>);
