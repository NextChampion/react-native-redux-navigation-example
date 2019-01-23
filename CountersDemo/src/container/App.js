import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

const App = StackNavigator({
  Login: { screen: LoginPage },
  Main: { screen: MainPage },
});

export default App
