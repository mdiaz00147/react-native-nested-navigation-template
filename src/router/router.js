import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
    HomeScreen,
    PicsScreen,
    ProfileScreen
} from "../screens";

const TabNavigator = createBottomTabNavigator({
    HomeScreen,
    PicsScreen,
    ProfileScreen
});

export default createAppContainer(TabNavigator);