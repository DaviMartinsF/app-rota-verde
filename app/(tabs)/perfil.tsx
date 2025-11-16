import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Link } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// Este é o componente da tela de Perfil
export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* 1. Esconde o cabeçalho nativo */}
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.container}>
        {/* 2. Título grande e centralizado */}
        <Text style={styles.header}>Meu perfil</Text>

        {/* 3. Ícone padrão de perfil */}
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle-outline" size={100} color="#34C759" />
        </View>
        <Text style={styles.username}>Pedro Silva</Text>

        {/* 4. Card de Impacto */}
        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Meu impacto</Text>
          <View style={styles.impactBody}>
            <View style={styles.impactColumn}>
              <Text style={styles.impactLabel}>Km sustentáveis</Text>
              <Text style={styles.impactValue}>
                <FontAwesome5 name="leaf" size={24} color="#fff" /> 0 Km
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.impactColumn}>
              <Text style={styles.impactLabel}>CO² economizado</Text>
              <Text style={styles.impactValue}>
                <Ionicons name="cloud-outline" size={24} color="#fff" /> 0 Kg
              </Text>
            </View>
          </View>
        </View>

        {/* 5. LINKS DE NAVEGAÇÃO (com setas verdes) */}
        <Link href="/enderecos" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="location-pin" size={24} color="#34C759" style={styles.menuIcon} />
            <Text style={styles.menuText}>Endereços salvos</Text>
            <Ionicons name="chevron-forward" size={22} color="#34C759" />
          </TouchableOpacity>
        </Link>
        
        <Link href="/configuracoes" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-sharp" size={24} color="#34C759" style={styles.menuIcon} />
            <Text style={styles.menuText}>Configurações</Text>
            <Ionicons name="chevron-forward" size={22} color="#34C759" />
          </TouchableOpacity>
        </Link>

        <Link href="/historico" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="walking" size={24} color="#34C759" style={styles.menuIcon} />
            <Text style={styles.menuText}>Histórico de rotas</Text>
            <Ionicons name="chevron-forward" size={22} color="#34C759" />
          </TouchableOpacity>
        </Link>

      </View>
    </SafeAreaView>
  );
}

// 6. ESTILOS
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  avatarContainer: { // Estilo para o ícone
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor: '#e0e0e0', // Fundo cinza claro
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  username: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  impactCard: {
    backgroundColor: '#34C759',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  impactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center', // Título centralizado
  },
  impactBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  impactColumn: {
    alignItems: 'center',
  },
  impactLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  impactValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f7',
  },
  menuIcon: {
    width: 30, 
    marginRight: 15,
  },
  menuText: {
    flex: 1, 
    fontSize: 17,
    color: '#000',
  },
});