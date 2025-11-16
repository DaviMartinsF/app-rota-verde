import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Switch, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';

// Este é o componente da tela
export default function TelaConfiguracoes() {
  
  // 1. STATE
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  const toggleNotificationSwitch = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  // 2. JSX (A parte visual da tela)
  return (
    // 'SafeAreaView' garante que o conteúdo não fique embaixo dos cantos
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        
        {/* Cabeçalho */}
        <Text style={styles.header}>Configurações</Text>

        {/* Seção "Geral" */}
        <Text style={styles.sectionTitle}>Geral</Text>
        <View style={styles.section}>
          {/* Linha 1: Notificações */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Receber Notificações</Text>
          <Switch
            // MUDANÇA AQUI: Trocamos o cinza claro por um mais escuro e visível
            trackColor={{ false: "#969494ff", true: "#34C759" }} 
            
            // Garante que a bolinha (thumb) seja sempre branca, ligada ou desligada
            thumbColor={"#ffffff"} 
            
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
    backgroundColor: '#f2f2f8ff', // Um cinza bem claro
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40, // Aumentei o padding de cima
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
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
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 10,
    overflow: 'hidden', // Para o borderRadius funcionar
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
    backgroundColor: '#f2f2f7', // Linha separadora
    marginLeft: 16, // Alinhar com o texto
  },
});