import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import store from './../redux/store';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {ADD_LOCATION, CLEAR_ALL} from './../redux/action';
import {useSelector} from 'react-redux';
import {initState} from '../redux/reducer';
import LocationBox from '../components/LocationBox';
import {Data} from './../types/index';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: initState) => store.locations);
  const [calc, setCalc] = useState<number>(0);
  const ref = useRef<number>();
  ref.current = calc;
  useEffect(() => {
    getLocation();
    let id = setInterval(() => {
      console.log(ref.current);
      if (ref.current != undefined && ref.current >= 30) {
        clearInterval(id);
      }
      getLocation();
    }, 300000);

    return () => {
      clearInterval(id);
    };
  }, []);
  const handleCalc = () => {
    setCalc(prev => prev - 1);
  };
  const getLocation = () => {
    setCalc(prev => prev + 1);
    Geolocation.getCurrentPosition(info => {
      console.log('info', info);

      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${info.coords.latitude},+${info.coords.longitude}&key=e5df47201cbb480aaeac429563c440c5&language=en&pretty=1`,
        )
        .then(res => {
          console.log('data', res.data);
          axios.post(`https://httpstat.us/200`).then(res => {
            console.log(res);
          });

          dispatch({
            type: ADD_LOCATION,
            payload: {
              longitude: info.coords.longitude,
              latitude: info.coords.latitude,
              address: res.data.results[0].formatted,
              time: res.data.timestamp.created_http,
            },
          });
        });
    });
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'black', padding: 10}}>
        Current location
      </Text>
      {data.length > 0 && (
        <View style={{padding: 10}}>
          <Text>{data[data.length - 1].address}</Text>
          <Text>{data[data.length - 1].time}</Text>
        </View>
      )}
      <Text style={{fontWeight: 'bold', color: 'black', padding: 10}}>
        Previous locations
      </Text>
      <FlatList
        data={data}
        keyExtractor={(e, i) => i.toString()}
        renderItem={({item, index}) => {
          return (
            <View>
              <LocationBox el={item} index={index} handleCalc={handleCalc} />
            </View>
          );
        }}
      />

      <View>
        <View style={styles.clear}>
          <TouchableOpacity
            onPress={() => {
              dispatch({type: CLEAR_ALL, payload: ''});
            }}>
            <Text style={styles.clearTetx}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  clear: {
    backgroundColor: '#1298b6',
    position: 'absolute',
    bottom: 0,
    left: 170,
    padding: 20,
    borderRadius: 20,
  },
  clearTetx: {
    color: 'white',
  },
});
