import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // <-- Importar isso!

export default function TabLayout() {
  const insets = useSafeAreaInsets(); // <-- Hook para pegar as áreas seguras

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#34C759',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          borderTopWidth: 0,
          paddingTop: 10,
          // <-- MUDANÇA AQUI: minHeight e paddingBottom dinâmico
          minHeight: 60 + insets.bottom, // Altura mínima + área segura inferior
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10, // Padding inferior dinâmico
        },
        headerShown: false,
      }}>
      
      {/* Aba 1: MAPA */}
      <Tabs.Screen
        name="index" // Ajuste para 'mapa' se o seu arquivo for 'mapa.tsx'
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color, size, focused }) => ( // <-- Adicionado 'focused'
            <View style={focused ? styles.focusedIcon : styles.iconContainer}>
              <Ionicons name="map-outline" color={focused ? "#fff" : color} size={size} /> {/* <-- Cor condicional */}
            </View>
          ),
        }}
      />

      {/* Aba 2: ROTAS SALVAS */}
      <Tabs.Screen
        name="enderecos"
        options={{
          title: 'Rotas salvas',
          tabBarIcon: ({ color, size, focused }) => ( // <-- Adicionado 'focused'
            <View style={focused ? styles.focusedIcon : styles.iconContainer}>
              <MaterialCommunityIcons name="map-marker-path" color={focused ? "#fff" : color} size={size} /> {/* <-- Cor condicional */}
            </View>
          ),
        }}
      />
      
      {/* Aba 3: PERFIL */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.focusedIcon : styles.iconContainer}>
              <Ionicons 
                name={focused ? "person-circle" : "person-circle-outline"} 
                color={focused ? "#fff" : color}
                size={size} 
              />
            </View>
          ),
        }}
      />

    </Tabs>
  );
}

// Estilos para os ícones das abas
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    // Remover marginTop: -5 daqui para alinhar ícones não focados
  },
  focusedIcon: {
    backgroundColor: '#34C759',
    borderRadius: 18,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    marginTop: -5, // Puxa o ícone focado um pouco para cima para o efeito visual
  }
});