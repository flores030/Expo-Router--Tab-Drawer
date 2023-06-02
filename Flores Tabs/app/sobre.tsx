import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> App do Flores</Text>
      <Text style={styles.texto}> TEXTO ALEATORIO TEXTO ALEATORIO  TEXTO ALEATORIO  TEXTO ALEATORIO   </Text>
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
  },


  texto: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    maxHeight: '90px',
    maxWidth: '200px',
  
    justifyContent:'center',

  }
  
});