import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function RouteMap() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="route" size={50} color="#ccc" />
      <Text style={styles.text}>Mapa da Rota (Nativo)</Text>
      <Text style={styles.subText}>O traçado verde aparecerá no celular.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 18, color: '#666', marginTop: 10, fontWeight: 'bold' },
  subText: { fontSize: 14, color: '#999', marginTop: 5 },
});