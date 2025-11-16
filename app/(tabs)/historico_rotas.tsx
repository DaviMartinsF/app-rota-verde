import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importe o SafeAreaView corrigido
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de localização

// 1. NOSSOS DADOS MOCKADOS (DADOS FALSOS)
// Em um app real, isso viria de um banco de dados.
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
  // A FlatList vai chamar essa função para cada item do 'historyData'.
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      {/* Ícone */}
      <Ionicons name="location-sharp" size={24} color="#34C759" style={styles.icon} />
      
      {/* Textos */}
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  // 3. A TELA EM SI
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Configuração do Cabeçalho */}
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Histórico de Rotas',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#f2f2f7' },
          headerShadowVisible: false,
        }}
      />
      
      {/* 4. A LISTA */}
      <FlatList
        data={historyData} // De onde vêm os dados
        renderItem={renderItem} // Como renderizar cada item
        keyExtractor={(item) => item.id} // Como identificar cada item (ID único)
        style={styles.list}
      />
    </SafeAreaView>
  );
}

// 5. ESTILOS
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  list: {
    paddingHorizontal: 20, // Espaçamento nas laterais da lista
    paddingTop: 20, // Espaçamento no topo
  },
  itemContainer: {
    backgroundColor: '#fff', // Fundo branco do card
    borderRadius: 10,
    padding: 15,
    marginBottom: 15, // Espaçamento entre os cards
    flexDirection: 'row', // Alinhar ícone e texto lado a lado
    alignItems: 'center', // Centralizar verticalmente
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 15, // Espaçamento entre o ícone e o texto
  },
  textContainer: {
    flex: 1, // Faz o texto ocupar o espaço restante
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