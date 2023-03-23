import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {initState} from '../redux/reducer';
const Map = () => {
  const locations = useSelector((store: initState) => store.locations);
  console.log(locations);
  return (
    <View>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: +locations[0].latitude,
          longitude: +locations[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {locations.map((marker, index) => {
          console.log(marker);
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: +marker.latitude,
                longitude: +marker.longitude,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
