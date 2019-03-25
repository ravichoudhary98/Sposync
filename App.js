import React, { Component } from 'react';

import Login from './Login';
import SignUpView from './Signup';
import Profile from './profile';
import Chat from './chat';
import Home from './MainScreen';
import Team from './Teams';
import EditProfile from './EditProfile';

import {
  Router,
  Scene,
} from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key = 'root' style={{paddingTop: 64}}>
          <Scene key = 'login' component = {Login} title = 'Login' />
          <Scene key = 'signup' component = {SignUpView} title = 'Signup' />
          <Scene key = 'profile' component = {Profile} title = 'Profile' />
          <Scene key = 'chat' component = {Chat} title = 'Chat' />
          <Scene key = 'home' component = {Home} title = 'Home' />
          <Scene key = 'team' component = {Team} />
          <Scene key = 'editprofile' component = {EditProfile} />
        </Scene>
      </Router>
    );
  }
}
