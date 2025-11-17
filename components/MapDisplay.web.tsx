import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

// Note que NÃO importamos 'react-native-maps' aqui. Isso salva o app na web.

export default function MapDisplay() {
  return (
    <View style={styles.mapPlaceholder}>
      <MaterialIcons name="map" size={50} color="#ccc" />
      <Text style={styles.placeholderText}>Mapa Google Nativo</Text>
      <Text style={styles.placeholderSubText}>Disponível apenas no Celular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPlaceholder: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { fontSize: 18, color: '#666', marginTop: 10, fontWeight: 'bold' },
  placeholderSubText: { fontSize: 14, color: '#999', marginTop: 5 },
});