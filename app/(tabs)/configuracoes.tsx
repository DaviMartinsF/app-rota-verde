import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importa o corrigido
import { Stack } from 'expo-router'; // Importa o Stack para ESCONDER o cabeçalho

// Este é o componente da tela
export default function TelaConfiguracoes() {
  // 1. STATE
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotificationSwitch = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  // 2. JSX (A parte visual da tela)
  return (
    <SafeAreaView style={styles.safeContainer}>
      
      {/* 1. ESCONDE O CABEÇALHO NATIVO */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* 2. NOSSO TÍTULO GRANDE E CENTRALIZADO */}
        <Text style={styles.header}>Configurações</Text>

        {/* Seção "Geral" */}
        <Text style={styles.sectionTitle}>Geral</Text>
        <View style={styles.section}>
          {/* Linha 1: Notificações */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Receber Notificações</Text>
            <Switch
              trackColor={{ false: '#BDBDBD', true: '#34C759' }} // Cinza e Verde
              thumbColor={'#ffffff'} // Bolinha sempre branca
              onValueChange={toggleNotificationSwitch}
              value={notificationsEnabled}
            />
          </View>

          <View style={styles.separator} />

          {/* Linha 2: Aparência */}
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowLabel}>Aparência</Text>
            <Text style={styles.rowArrow}>&gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Seção "Preferências de Rota" */}
        <Text style={styles.sectionTitle}>Preferências de Rota</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowLabel}>Modo de Transporte Padrão</Text>
            <Text style={styles.rowValue}>Bicicleta &gt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// 3. STYLES (A parte de design)
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, // Padding do topo
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center', // <-- A MÁGICA ESTÁ AQUI
  },
  sectionTitle: {
    fontSize: 16,
    color: '#6e6e73',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowLabel: {
    fontSize: 17,
    color: '#000',
  },
  rowValue: { // Estilo para "Bicicleta >"
    fontSize: 17,
    color: '#34C759', // Verde
  },
  rowArrow: { // Estilo para a seta de "Aparência"
    fontSize: 20,
    color: '#34C759', // Cinza (ou mude para '#34C759' se quiser verde)
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f7',
    marginLeft: 16,
  },
});