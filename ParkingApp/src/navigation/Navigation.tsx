import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Parking from '../screens/Parking';
import Payment from '../screens/Payment';
import {RootStackParamList} from '../types';
import {Provider} from 'react-redux';
import store from './../redux/store';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Parking" component={Parking} />
          <RootStack.Screen name="Payment" component={Payment} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
