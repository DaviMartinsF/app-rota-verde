import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PlanejarRotaScreen() {
  const router = useRouter();
  
  // ESTADOS
  const [destino, setDestino] = useState('');
  const [localizacaoAtual, setLocalizacaoAtual] = useState<Location.LocationObject | null>(null);
  const [statusGPS, setStatusGPS] = useState('buscando'); // 'buscando', 'sucesso', 'erro'
  
  // Estados visuais (Transporte e Filtros)
  const [transporte, setTransporte] = useState('caminhada'); // 'caminhada', 'bike', 'trem', 'onibus'
  const [comSombra, setComSombra] = useState(true);
  const [maisSegura, setMaisSegura] = useState(true);

  // Tenta pegar o GPS ao abrir a tela
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão negada', 'Habilite a localização para usar o GPS.');
          setStatusGPS('erro');
          return;
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced
        });
        
        setLocalizacaoAtual(location);
        setStatusGPS('sucesso');

      } catch (error) {
        console.log("Erro ao pegar GPS:", error);
        setStatusGPS('erro');
      }
    })();
  }, []);

  const handleBuscarRotas = () => {
    if (destino.trim() === '') {
      Alert.alert("Opa!", "Digite o destino.");
      return;
    }

    let origemLat, origemLng;

    // LÓGICA DO PLANO B (GPS Real vs Simulado)
    if (localizacaoAtual) {
      origemLat = localizacaoAtual.coords.latitude;
      origemLng = localizacaoAtual.coords.longitude;
    } else {
      Alert.alert("Aviso", "Usando localização simulada (Av. Paulista) para teste.");
      origemLat = -23.561684; 
      origemLng = -46.655981;
    }
    
    router.push({
      pathname: '/rota',
      params: { 
        destinoNome: destino,
        origemLat: origemLat,
        origemLng: origemLng
        // Se quiser, pode passar o transporte escolhido também:
        // transporte: transporte 
      } 
    });
  };

  return (
    <View style={styles.container}>
      
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Rota Verde</Text>
          <Text style={styles.headerSubtitle}>Planejar Rota</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* CARD DE INPUTS (ORIGEM/DESTINO) */}
        <View style={styles.inputCard}>
          {/* Origem */}
          <View style={styles.inputRow}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Origem</Text>
              {statusGPS === 'buscando' && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <ActivityIndicator size="small" color="#00A859" />
                    <Text style={styles.loadingText}> Buscando satélites...</Text>
                </View>
              )}
              {statusGPS === 'sucesso' && (
                <TextInput style={styles.input} value="Minha Localização Atual" editable={false} />
              )}
              {statusGPS === 'erro' && (
                <Text style={[styles.input, {color: 'orange'}]}>GPS Indisponível (Simulado)</Text>
              )}
            </View>
            <Ionicons name={statusGPS === 'sucesso' ? "location-sharp" : "location-outline"} size={24} color={statusGPS === 'erro' ? "orange" : "#00A859"} />
          </View>

          <View style={styles.divider} />

          {/* Destino */}
          <View style={styles.inputRow}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Destino</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: Shopping..."
                value={destino}            
                onChangeText={setDestino} 
              />
            </View>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={28} color="#00A859" />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- SELETOR DE TRANSPORTE (RESTAURADO) --- */}
        <View style={styles.transportContainer}>
          <TouchableOpacity 
            style={[styles.transportButton, transporte === 'caminhada' && styles.transportActive]}
            onPress={() => setTransporte('caminhada')}
          >
            <FontAwesome5 name="walking" size={24} color={transporte === 'caminhada' ? '#00A859' : '#ccc'} />
          </TouchableOpacity>

          <View style={styles.verticalDivider} />

          <TouchableOpacity 
            style={[styles.transportButton, transporte === 'bike' && styles.transportActive]}
            onPress={() => setTransporte('bike')}
          >
            <Ionicons name="bicycle" size={28} color={transporte === 'bike' ? '#00A859' : '#ccc'} />
          </TouchableOpacity>

          <View style={styles.verticalDivider} />

          <TouchableOpacity 
            style={[styles.transportButton, transporte === 'trem' && styles.transportActive]}
            onPress={() => setTransporte('trem')}
          >
            <FontAwesome5 name="train" size={24} color={transporte === 'trem' ? '#00A859' : '#ccc'} />
          </TouchableOpacity>

          <View style={styles.verticalDivider} />

          <TouchableOpacity 
            style={[styles.transportButton, transporte === 'onibus' && styles.transportActive]}
            onPress={() => setTransporte('onibus')}
          >
            <FontAwesome5 name="bus" size={24} color={transporte === 'onibus' ? '#00A859' : '#ccc'} />
          </TouchableOpacity>
        </View>

        {/* --- FILTROS (RESTAURADO) --- */}
        <Text style={styles.sectionTitle}>Filtros</Text>
        
        <View style={styles.filterRow}>
          <Text style={styles.filterText}>Priorizar rotas com sombra</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00A859" }}
            thumbColor={comSombra ? "#fff" : "#f4f3f4"}
            onValueChange={() => setComSombra(!comSombra)}
            value={comSombra}
          />
        </View>

        <View style={styles.filterRow}>
          <Text style={styles.filterText}>Usar rotas mais seguras</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00A859" }}
            thumbColor={maisSegura ? "#fff" : "#f4f3f4"}
            onValueChange={() => setMaisSegura(!maisSegura)}
            value={maisSegura}
          />
        </View>

        {/* BOTÃO DE AÇÃO */}
        <TouchableOpacity 
          style={[styles.searchButton, statusGPS === 'buscando' ? {backgroundColor: '#ccc'} : {}]}
          onPress={handleBuscarRotas}
          disabled={statusGPS === 'buscando'}
        >
          <Text style={styles.searchButtonText}>
            {statusGPS === 'buscando' ? 'Aguarde o GPS...' : 'Buscar Rotas'}
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: 20, alignItems: 'center'}}>
            <Text style={{color: '#aaa', fontSize: 12}}>Status GPS: {statusGPS.toUpperCase()}</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 50 },
  backButton: { marginRight: 20 },
  headerTitle: { fontSize: 18, color: '#00A859', fontWeight: 'bold' },
  headerSubtitle: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  content: { padding: 20 },
  
  // Inputs
  inputCard: { backgroundColor: '#f5f5f5', borderRadius: 15, padding: 15, marginBottom: 20 },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  textContainer: { flex: 1 },
  label: { fontWeight: 'bold', fontSize: 16, marginBottom: 2 },
  input: { fontSize: 16, color: '#000', paddingVertical: 4 },
  loadingText: { fontSize: 14, color: '#888', fontStyle: 'italic' },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 5 },

  // Transporte
  transportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#00A859',
  },
  transportButton: { padding: 10 },
  transportActive: { opacity: 1 }, // Se quiser destacar mais, mude o background aqui
  verticalDivider: { width: 1, height: '60%', backgroundColor: '#ddd' },

  // Filtros
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  filterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  filterText: { fontSize: 16, color: '#444' },

  // Botão Final
  searchButton: { backgroundColor: '#00A859', borderRadius: 30, paddingVertical: 18, alignItems: 'center', marginTop: 10, marginBottom: 40 },
  searchButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});