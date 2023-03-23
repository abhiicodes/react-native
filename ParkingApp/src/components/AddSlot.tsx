import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Data} from '../types';
import {TextInput, Button} from 'react-native-paper';
type AddSlotProps = {
  handleSlot: (t: string) => void;
};
const AddSlot = ({handleSlot}: AddSlotProps) => {
  const [text, setText] = useState<string>('');
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Enter vehicle registration number"
        value={text}
        onChangeText={val => setText(val)}
      />
      <Button
        mode="contained"
        onPress={() => {
          handleSlot(text);
        }}>
        Add a slot
      </Button>
    </View>
  );
};

export default AddSlot;

const styles = StyleSheet.create({});
