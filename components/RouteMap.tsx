import React, { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface RouteMapProps {
  destinoNome: string; // Ex: "Shopping Recife"
  origem: {
    latitude: number;
    longitude: number;
  };
}

export default function RouteMap({ destinoNome, origem }: RouteMapProps) {
  const mapRef = useRef<MapView>(null);
  const [destinoCoords, setDestinoCoords] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  // 🚨 COLE SUA CHAVE DO GOOGLE AQUI 🚨
  const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          ...origem,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        loadingEnabled={true} // Mostra um loading nativo enquanto carrega o mapa
      >
        {/* Marcador da sua posição */}
        <Marker coordinate={origem} title="Você está aqui" pinColor="blue" />

        {/* Marcador do Destino (Só aparece depois que o Google calcula a rota) */}
        {destinoCoords && (
          <Marker coordinate={destinoCoords} title={destinoNome} pinColor="red" />
        )}

        {/* A MÁGICA DO GOOGLE DIRECTIONS */}
        <MapViewDirections
          origin={origem}
          destination={destinoNome} // O Google aceita string! Ele faz o geocoding sozinho.
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="#00A859" // Verde Rota Verde
          mode="WALKING" // Rota a pé
          
          // Quando a rota termina de carregar:
          onReady={(result) => {
            console.log("✅ Rota Google carregada!");
            
            // 1. Pegamos a coordenada final para colocar o pino vermelho
            setDestinoCoords(result.coordinates[result.coordinates.length - 1]);
            
            // 2. Ajustamos o zoom do mapa para caber tudo
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: { top: 100, right: 50, bottom: 300, left: 50 },
              animated: true,
            });
            setCarregando(false);
          }}
          
          onError={(errorMessage) => {
            console.log("❌ Erro Google Directions:", errorMessage);
          }}
        />
      </MapView>
      
      {/* Loading Overlay (opcional, enquanto calcula) */}
      {carregando && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#00A859" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 5
  }
});
