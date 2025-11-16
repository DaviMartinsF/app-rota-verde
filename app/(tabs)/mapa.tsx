import { View, Text, StyleSheet } from 'react-native';

export default function TelaMapa() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela do Mapa</Text>
      <Text>Aqui é onde o mapa vai aparecer.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});