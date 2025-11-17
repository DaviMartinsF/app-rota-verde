import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const historyData = [
  {
    id: '1',
    title: 'MASP',
    address: 'Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200',
  },
  {
    id: '2',
    title: 'Casa',
    address: 'Rua XXXXX',
  },
  {
    id: '3',
    title: 'Universidade Presbiteriana Mackenzie',
    address: 'Rua da Consolação, 930 - Consolação, São Paulo - SP 01302-907',
  },
  {
    id: '4',
    title: 'Shopping Ibirapuera',
    address: 'Av. Ibirapuera, 3103 - Indianópolis, São Paulo - SP, 04088-005',
  },
];

// Define o tipo para cada item (para TypeScript)
type HistoryItem = {
  id: string;
  title: string;
  address: string;
};

export default function HistoricoRotasScreen() {
  const router = useRouter();

  // Função que renderiza cada item
  // Adicionamos o tipo { item: HistoryItem }
  const renderItem = ({ item }: { item: HistoryItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Ionicons name="time-outline" size={24} color="#34C759" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* 3. CABEÇALHO COM BOTÃO DE VOLTAR */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#34C759" />
          </TouchableOpacity>
          <Text style={styles.header}>Histórico de Rotas</Text>
        </View>

        {/* 4. A LISTA */}
        <FlatList
          data={historyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

// 4. ESTILOS
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 5,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  itemAddress: {
    fontSize: 15,
    color: '#8e8e93',
    marginTop: 2,
  },
});