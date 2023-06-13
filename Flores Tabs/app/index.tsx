import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs } from "expo-router";
import { TextComponent } from 'react-native/Libraries/Text/Text';
import React from "react";



export default function App() {
  return (
    <View style={styles.container}>
      <div className='App'> </div>
  
      <Image
        style={styles.imagem}
        source={require('../assets/laranja.png')}
      />



      <Text style={styles.titulo}> App do Flores Index </Text>
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
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    maxHeight: '90px',
    maxWidth: '190px',
    justifyContent:'justify',

  },


  imagem: {
    alignItems: 'center',
    maxWidth:'100px',
    maxHeight: '100px'

  }

});
