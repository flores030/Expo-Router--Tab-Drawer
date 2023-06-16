import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import React, { useState } from 'react';
import { Tabs } from "expo-router";
import { TextComponent } from 'react-native/Libraries/Text/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from "expo-router";

const MyForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCPF] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(event.target.value);
  };

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCPF(event.target.value);
  };

  return (


    
    <div style={styles.texto}>
      <div>

  <Text style={styles.titulo}> App do Flores Cad </Text>
  <Image
    style={styles.imagem}
    source={require('../assets/laranja.png')}
  />
  
        
      </div>
        <div className='App'> </div>
 
        

      <label>
        Nome:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Data de Nascimento:
        <input type="text" value={birthdate} onChange={handleBirthdateChange} />
      </label>
      <br />
      <label>
        CPF:
        <input type="text" value={cpf} onChange={handleCPFChange} />
      </label>

      <div style={styles.botao}>
    <TouchableOpacity>
      <Text>Voltar </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>Salvar </Text>
    </TouchableOpacity>
    
</div>

<View style={styles.container}>
      <Link href="/">Ir para o Index</Link>
      <StatusBar style="auto" />
    </View>

    </div>

    
  );
};

export default MyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },





  texto: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    maxHeight: '90px',
    maxWidth: '200px',
    marginLeft: '900px',
    justifyContent:'center',
    marginTop: '200px',

  },
  
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent:'center',
    marginLeft: -70,

  },

  imagem: {
    alignItems: 'center',
    maxWidth:'100px',
    maxHeight: '100px'

  },

botao: {

}
 

  


});
