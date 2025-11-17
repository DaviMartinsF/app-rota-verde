import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
export default function Layout() {
  const insets = useSafeAreaInsets(); 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00A859', // Verde ativo
        tabBarInactiveTintColor: '#4F4F4F', // Cinza inativo
        headerShown: false, // Esconde o cabeçalho padrão
        
        
        tabBarStyle: {
          backgroundColor: '#F6F6F6', // Usei a cor do seu design anterior
          borderTopWidth: 0,
          paddingTop: 10,
          // Altura mínima + o espaço da área segura
          minHeight: 70 + insets.bottom, 
          // Padding inferior dinâmico para não cortar
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10, 
        }
      }}
    >

      {/* 1. MAPA (index) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color={color} />,
        }}
      />

      {/* 2. ENDEREÇOS SALVOS */}
      <Tabs.Screen
        name="enderecos"
        options={{
          title: 'Endereços',
          tabBarIcon: ({ color }) => <FontAwesome5 name="map" size={24} color={color} />,
        }}
      />

      {/* 3. PERFIL */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={24} color={color} />,
        }}
      />

      {/* --- TELAS ESCONDIDAS (ACESSÍVEIS APENAS POR BOTÕES INTERNOS) --- */}
      <Tabs.Screen name="planejar" options={{ href: null }} />
      <Tabs.Screen name="rota" options={{ href: null }} />
      <Tabs.Screen name="historico" options={{ href: null }} />
      <Tabs.Screen name="configuracoes" options={{ href: null }} />
      <Tabs.Screen name="modal" options={{ href: null }} />
      <Tabs.Screen name="mapa" options={{ href: null }} />

    </Tabs>
  );
}