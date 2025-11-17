import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00A859', // Verde ativo
        tabBarInactiveTintColor: '#4F4F4F', // Cinza inativo
        headerShown: false, // Esconde o cabeçalho padrão
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        }
      }}
    >
      {/* --- ITENS VISÍVEIS NO MENU (APENAS 3) --- */}

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
      {/* Usamos href: null para esconder do menu de baixo */}

      <Tabs.Screen name="planejar" options={{ href: null }} />
      <Tabs.Screen name="rota" options={{ href: null }} />
      
      <Tabs.Screen name="historico" options={{ href: null }} />
      <Tabs.Screen name="configuracoes" options={{ href: null }} />
      <Tabs.Screen name="modal" options={{ href: null }} />
      <Tabs.Screen name="mapa" options={{ href: null }} />

    </Tabs>
  );
}