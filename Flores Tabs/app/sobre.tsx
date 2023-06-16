import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <div className='App'> </div>
  
      <Image
        style={styles.imagem}
        source={require('../assets/laranja.png')}
      />



      <Text style={styles.titulo}> App do Flores </Text>
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
    justifyContent:'center',
    marginLeft: -30,

  },

  texto: {
     
    fontSize: 20,
    alignItems: 'center',
    maxHeight: '70px',
    maxWidth: '170px',
   
  },


  imagem: {
    alignItems: 'center',
    maxWidth:'100px',
    maxHeight: '100px'

  }
});
