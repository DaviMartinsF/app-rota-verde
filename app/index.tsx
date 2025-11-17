import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapDisplay from '../components/MapDisplay';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* MAPA */}
      <MapDisplay />

      {/* BARRA DE PESQUISA SUPERIOR */}
      <View style={styles.searchContainer}>
        <TouchableOpacity 
          style={styles.searchBar} 
          activeOpacity={0.9}
          onPress={() => router.push('/planejar')} // <--- AQUI ESTÁ O REDIRECIONAMENTO
        >
          <Ionicons name="search" size={20} color="#00A859" />
          <Text style={styles.searchText}>Para onde vamos hoje?</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.circleButton}>
           <MaterialIcons name="my-location" size={24} color="#00A859" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
           <Ionicons name="compass-outline" size={24} color="#00A859" />
        </TouchableOpacity>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: { position: 'absolute', top: 60, width: '100%', alignItems: 'center', zIndex: 1 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', width: '90%', padding: 15, borderRadius: 25, elevation: 5, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 },
  searchText: { marginLeft: 10, color: '#555', fontSize: 16, fontWeight: '500' },
  floatingButtons: { position: 'absolute', right: 20, bottom: 40 }, // Ajustei o bottom pois não tem mais menu embaixo
  circleButton: { backgroundColor: '#fff', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 4, shadowColor: '#000', shadowOpacity: 0.25 },
});