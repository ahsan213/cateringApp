import React, { Component } from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateOrder from './pages/CreateOrder';
import CreateInventry from './pages/CreateInventry';
import AdminDashboard from './pages/AdminDashboard';
import OrderApproved from './pages/OrderApproved';
import ShowInventory from './pages/ShowInventory';
// import HomeScreen from './pages/HomeScreen';
// import DetailsScreen from './pages/DetailsScreen';
// import ProfileScreen from './pages/ProfileScreen';
// import SettingsScreen from './pages/SettingsScreen';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    Login: Login , 
    Signup:Signup,
    Dashboard:Dashboard,
    CreateOrder:CreateOrder,
    AdminDashboard:AdminDashboard,
    CreateInventry:CreateInventry,
    OrderApproved:OrderApproved,
    ShowInventory:ShowInventory
  //   HomeScreen:HomeScreen,
  //   DetailsScreen:DetailsScreen,
  //   ProfileScreen:ProfileScreen,
  //   SettingsScreen:SettingsScreen,
  },
  {
    initialRouteName: 'Login',
  }
);
export default createAppContainer(App);