import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function MapDisplay() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -23.561684,
        longitude: -46.655981,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});