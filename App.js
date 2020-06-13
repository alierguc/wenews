
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/Drawer';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#2565AE"/>
        <Drawer />
      </NavigationContainer>

    );
  }
}
