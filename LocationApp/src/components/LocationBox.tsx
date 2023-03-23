import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Data} from '../types';
import {useDispatch} from 'react-redux';
import {REMOVE_LOCATION} from '../redux/action';
type Props = {
  el: Data;
  index: number;
  handleCalc: () => void;
};
const LocationBox = ({el, index, handleCalc}: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginBottom: 10}}>{el.address}</Text>
        <Text>{el.time}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          onPress={() => {
            console.log(index);
            handleCalc();
            dispatch({type: REMOVE_LOCATION, payload: index});
          }}>
          <Text style={styles.rightText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',

    width: '95%',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    paddingRight: 100,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    gap: 10,
    elevation: 20,
    marginBottom: 10,
  },
  left: {},
  right: {
    height: '80%',

    backgroundColor: '#da1717',
    paddingTop: 20,

    borderRadius: 20,
    paddingHorizontal: 10,
  },
  rightText: {
    color: 'white',
  },
});
