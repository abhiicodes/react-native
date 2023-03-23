import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Data} from '../types';

type slotProps = {
  item: Data;
  handleExit: (item: Data, index: number) => void;
  index: number;
};

const Slot = ({item, handleExit, index}: slotProps) => {
  if (!item.carregistration) {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Empty Slot no {index.toString()}</Text>
      </View>
    );
  }
  return (
    <View style={styles.containerOc}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
        {item.carregistration}
      </Text>
      <Button
        style={{backgroundColor: 'white'}}
        onPress={() => {
          handleExit(item, index);
        }}>
        Exit vehicle
      </Button>
    </View>
  );
};

export default Slot;

const styles = StyleSheet.create({
  containerOc: {
    margin: 10,
    backgroundColor: 'red',
    padding: 30,
  },
  container: {
    margin: 10,
    backgroundColor: 'green',
    padding: 30,
  },
});
