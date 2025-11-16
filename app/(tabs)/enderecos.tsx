import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router'; // Importa o Stack para o cabeçalho de navegação
import { Ionicons } from '@expo/vector-icons'; // Para os ícones de lápis e adição

export default function EnderecosSalvosScreen() {
  return (
    // SafeAreaView para evitar o notch e a barra de status
    <SafeAreaView style={styles.safeContainer}>
      {/* Configurações do cabeçalho de navegação (topo da tela) */}
      <Stack.Screen
        options={{
          headerShown: true, // Garante que o cabeçalho seja visível
          title: 'Endereços Salvos', // Título central
          headerTitleAlign: 'center', // Alinha o título no centro
          headerStyle: {
            backgroundColor: '#f2f2f7', // Fundo do cabeçalho
          },
          headerShadowVisible: false, // Remove a sombra inferior do cabeçalho
          // ... (logo abaixo de 'headerShadowVisible: false,')

        headerTitleStyle: {
          color: '#000', // Define a cor do título como preto
          fontWeight: 'bold', // Deixa o título em negrito
          fontSize: 17, // Um bom tamanho padrão
        },
        }}
      />

      <View style={styles.container}>
        {/* Bloco principal de endereços */}
        <View style={styles.addressBlock}>
          {/* Ícones de edição e adição */}
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="#34C759" /> {/* Lápis verde */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="add-circle" size={24} color="#34C759" /> {/* Círculo com + verde */}
            </TouchableOpacity>
          </View>

          {/* Item "Casa" */}
          <View style={styles.addressItem}>
            <Text style={styles.addressTitle}>Casa</Text>
            <Text style={styles.addressSubtitle}>Rua xxxxx</Text>
          </View>
          <View style={styles.separator} />

          {/* Item "Trabalho" */}
          <View style={styles.addressItem}>
            <Text style={styles.addressTitle}>Trabalho</Text>
            <Text style={styles.addressSubtitle}>Avenida xxxxx</Text>
          </View>
          <View style={styles.separator} />

          {/* Item "Academia" */}
          <View style={styles.addressItem}>
            <Text style={styles.addressTitle}>Academia</Text>
            <Text style={styles.addressSubtitle}>Alameda xxxxx</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7', // Fundo cinza claro
  },
  container: {
    flex: 1,
    paddingHorizontal: 20, // Padding horizontal como no design
    paddingTop: 0, // O cabeçalho já gerencia o topo
  },
  addressBlock: {
    backgroundColor: '#fff', // Fundo branco do bloco
    borderRadius: 10,
    marginTop: 20, // Espaçamento do topo
    paddingVertical: 10, // Padding interno vertical
    paddingHorizontal: 15, // Padding interno horizontal
    shadowColor: '#000', // Sombra leve para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinhar ícones à direita
    paddingVertical: 10,
  },
  iconButton: {
    marginLeft: 15, // Espaçamento entre os ícones
  },
  addressItem: {
    paddingVertical: 10, // Espaçamento interno de cada item
  },
  addressTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  addressSubtitle: {
    fontSize: 15,
    color: '#8e8e93', // Cor cinza do subtítulo
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f7', // Linha separadora
    marginVertical: 10, // Espaçamento da linha
  },
});