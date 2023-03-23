import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {HomeProps} from '../types';
import {useDispatch} from 'react-redux';
import {Total} from '../redux/action';

const Home = (props: HomeProps) => {
  const [num, setNum] = useState<string>('');
  const dispatch = useDispatch();
  return (
    <View>
      <TextInput
        mode="outlined"
        keyboardType="numeric"
        label="Enter number of parking slots"
        value={num}
        onChangeText={val => setNum(val)}
      />
      <Button
        mode="contained"
        disabled={!num}
        onPress={() => {
          dispatch({type: Total, payload: num});
          props.navigation.navigate('Parking', {no: num});
        }}>
        Submit
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
