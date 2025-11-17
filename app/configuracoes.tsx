import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TelaConfiguracoes() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const router = useRouter();

  const toggleNotificationSwitch = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* Cabeçalho com Seta Verde */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#34C759" />
          </TouchableOpacity>
          <Text style={styles.header}>Configurações</Text>
        </View>

        {/* Seção "Geral" */}
        <Text style={styles.sectionTitle}>Geral</Text>
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Receber Notificações</Text>
            <Switch
              trackColor={{ false: '#BDBDBD', true: '#34C759' }}
              thumbColor={'#ffffff'}
              onValueChange={toggleNotificationSwitch}
              value={notificationsEnabled}
            />
          </View>
          <View style={styles.separator} />
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

// ESTILOS ATUALIZADOS
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
  sectionTitle: {
    fontSize: 16,
    color: '#6e6e73',
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 12,
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
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  rowLabel: {
    fontSize: 17,
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#34C759',
  },
  rowArrow: {
    fontSize: 20,
    color: '#34C759',
  },
  separator: {
    height: 1,
    backgroundColor: '#f2f2f7',
    marginLeft: 16,
  },
});