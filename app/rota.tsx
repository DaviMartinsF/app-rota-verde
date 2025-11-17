import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RouteMap from '../components/RouteMap';

export default function RotaScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const destinoNome = (params.destinoNome as string) || "Destino";
  const origemLat = parseFloat(params.origemLat as string);
  const origemLng = parseFloat(params.origemLng as string);

  return (
    <View style={styles.container}>
      
      {/* Verifica se tem GPS antes de tentar desenhar */}
      {origemLat && origemLng ? (
        <RouteMap 
          destinoNome={destinoNome} 
          origem={{ latitude: origemLat, longitude: origemLng }} 
        />
      ) : (
        <View style={styles.errorView}>
          <Text>Erro: Localização não recebida.</Text>
        </View>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color="#000" />
      </TouchableOpacity>

      <View style={styles.bottomCard}>
        <Text style={styles.destinationLabel}>Indo para:</Text>
        <Text style={styles.destinationValue}>{destinoNome}</Text>
        
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Iniciar Navegação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  errorView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: '#fff', padding: 8, borderRadius: 20, elevation: 5, zIndex: 10 },
  bottomCard: { position: 'absolute', bottom: 40, left: 20, right: 20, backgroundColor: '#00A859', borderRadius: 20, padding: 20, alignItems: 'center', elevation: 10 },
  destinationLabel: { color: '#e0ffe0', fontSize: 14 },
  destinationValue: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  startButton: { backgroundColor: '#fff', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 25, width: '100%', alignItems: 'center' },
  startButtonText: { color: '#006400', fontSize: 18, fontWeight: 'bold' },
});