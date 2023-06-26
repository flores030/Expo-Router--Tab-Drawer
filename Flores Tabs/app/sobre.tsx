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
      <Link href="/cadastro">Ir para o Cadastro</Link>
      <Text style={styles.texto}> TEXTO ALEATORIO TEXTO ALEATORIO  TEXTO ALEATORIO  TEXTO ALEATORIO   </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '300px',
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
     
    backgroundColor: 'blue',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '178px',
    fontSize: 20,
    alignItems: 'center',
    justifyContent:'center',
  },


  imagem: {
    alignItems: 'center',
    maxWidth:'100px',
    maxHeight: '100px'

  }
});
