import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importe o SafeAreaView corrigido
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de localização

// 1. NOSSOS DADOS MOCKADOS (DADOS FALSOS)
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

// Este é o componente da tela
export default function HistoricoRotasScreen() {
  
  // 2. FUNÇÃO QUE RENDERIZA CADA ITEM
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      {/* Ícone */}
      <Ionicons name="time-outline" size={24} color="#34C759" style={styles.icon} />

      {/* Textos */}
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  // 3. A TELA EM SI (ATUALIZADA)
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      {/* 1. ESCONDE O CABEÇALHO NATIVO */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* 2. NOSSO TÍTULO GRANDE E CENTRALIZADO */}
        <Text style={styles.header}>Histórico de Rotas</Text>

        {/* 3. A LISTA */}
        <FlatList
          data={historyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // O padding já está no 'container', então a lista não precisa de estilo
        />
      </View>
    </SafeAreaView>
  );
  // NOTA: Eu removi a <FlatList> duplicada que estava aqui no seu código
}

// 5. ESTILOS (ATUALIZADOS)
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  // ADICIONAMOS O CONTAINER E O HEADER
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, // Padding do topo
  },
  header: {
    fontSize: 34,       // Mesmo tamanho do Configurações
    fontWeight: 'bold', // Mesmo peso
    color: '#000',
    marginBottom: 20,
    textAlign: 'center', // Centralizado!
  },
  // O 'list' não precisa mais de padding
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