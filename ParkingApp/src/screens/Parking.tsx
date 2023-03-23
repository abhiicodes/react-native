import {FlatList, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import {Data, ParkingProps} from '../types';
import {initialData} from './../types/index';
import Slot from '../components/Slot';
import {TextInput, Button} from 'react-native-paper';
import AddSlot from '../components/AddSlot';
import {useSelector} from 'react-redux';
import store from './../redux/store';
import {initData} from '../redux/reducer';
import {useDispatch} from 'react-redux';
import {Change} from '../redux/action';

const Parking = (props: ParkingProps) => {
  const {no} = props.route.params;
  // const [slots, setSlots] = useState<Data[]>(new Array(+no).fill(initialData));
  const slots = useSelector((store: initData) => store.slots);
  const dispatch = useDispatch();
  const handleSlot = (text: string) => {
    const availSlots = slots
      .map((el, i) => (el.carregistration ? -1 : i))
      .filter(el => el != -1)
      .sort((a, b) => a - b);
    console.log(availSlots);
    if (availSlots.length == 0) {
      console.log('full');
      ToastAndroid.show('All parking slots are occupied!', ToastAndroid.SHORT);
      return;
    }
    let randomnumber: number = 0;
    while (slots[randomnumber].carregistration) {
      randomnumber =
        Math.floor(
          Math.random() *
            (availSlots[availSlots.length - 1] - availSlots[0] + 1),
        ) + availSlots[0];
    }

    dispatch({
      type: Change,
      payload: slots.map((el, i) =>
        i == randomnumber ? {carregistration: text, time: Date.now()} : el,
      ),
    });
  };

  const handleExit = (item: Data, index: number) => {
    let exitTime = Date.now();
    let charge = 10;
    let parkTime = Math.floor((exitTime - item.time) / (1000 * 60 * 60));

    if (parkTime > 2) {
      charge += (parkTime - 2) * 10;
    }
    item.charge = charge;
    let nData = slots.map((el, i) => {
      if (i == index) {
        return initialData;
      }
      return el;
    });

    dispatch({
      type: Change,
      payload: nData,
    });
    props.navigation.navigate('Payment', {data: item});
  };

  return (
    <View>
      <AddSlot handleSlot={handleSlot} />
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={slots}
          keyExtractor={(e, i) => i.toString()}
          renderItem={({item, index}) => (
            <Slot item={item} handleExit={handleExit} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default Parking;

const styles = StyleSheet.create({
  container: {},
});
