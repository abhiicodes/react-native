/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';

import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';
import Home from './src/screens/Home';
import Parking from './src/screens/Parking';
import Payment from './src/screens/Payment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Parking" component={Parking} />
          <RootStack.Screen name="Payment" component={Payment} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
