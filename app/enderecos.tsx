import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router'; // Não precisamos mais do useRouter
import { Ionicons } from '@expo/vector-icons';

export default function EnderecosSalvosScreen() {
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* 1. Esconde o cabeçalho nativo */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* 2. Título (SEM O BOTÃO DE VOLTAR) */}
        <Text style={styles.header}>Endereços Salvos</Text>

        {/* Bloco principal de endereços */}
        <View style={styles.addressBlock}>
          {/* Ícones de edição e adição */}
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color="#34C759" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="add-circle" size={24} color="#34C759" />
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

// 3. ESTILOS (SEM OS ESTILOS 'headerContainer' e 'backButton')
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
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20, // Trazemos o marginBottom de volta para cá
  },
  addressBlock: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  iconButton: {
    marginLeft: 15,
  },
  addressItem: {
    paddingVertical: 10,
  },
  addressTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  addressSubtitle: {
    fontSize: 15,
    color: '#8e8e93',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f7',
    marginVertical: 10,
  },
});