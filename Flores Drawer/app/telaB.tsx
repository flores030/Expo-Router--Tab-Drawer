import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela B</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



  titulo: {

    fontSize: 26,
    fontWeight: 'bold',
  }
});
