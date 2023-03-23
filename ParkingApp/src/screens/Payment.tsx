import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React from 'react';
import {PaymentProps} from '../types';
import {TextInput, Button} from 'react-native-paper';
import axios from 'axios';

const Payment = (props: PaymentProps) => {
  const {data} = props.route.params;
  return (
    <View>
      <Text>Payment is {data.charge}</Text>
      <Button
        onPress={() => {
          axios
            .post('https://httpstat.us/200')
            .then(res => {
              console.log(res);
            })
            .then(res => {
              ToastAndroid.show('Payment successfull', ToastAndroid.SHORT);
            });
        }}>
        Payment taken
      </Button>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
