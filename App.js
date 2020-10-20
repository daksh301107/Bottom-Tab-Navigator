import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBook from './screens/fb';
import Insta from './screens/in';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer />
  );
  }

}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen:FaceBook},
  Insta : {screen:Insta},
  
})


const AppContainer = createAppContainer(TabNavigator);
