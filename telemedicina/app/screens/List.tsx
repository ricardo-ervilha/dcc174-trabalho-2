import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationProp, Router } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import CustomButtonArea from '../components/CustomButtonArea'


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  
  return (
    <View>
      
      <View style={styles.profile}>
        <Image source={require('../../assets/doctor.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Olá <Text style={styles.boldText}>André</Text>,</Text>
          <Text style={styles.welcomeText}>Seja Bem-Vindo(a).</Text>
        </View>
      </View>

      
      <View style={{flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center', gap:23, padding:48, marginTop: 48}}>
        <CustomButtonArea imagepath={require('../../assets/communication.png')} text="Acessar Dúvidas"/>
        <CustomButtonArea imagepath={require('../../assets/report.png')} text="Gerar relatório de Estagiário" />                    
        {/* <Button onPress={() => navigation.navigate('Details')} title="Open Details"/> */}
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',  // Centraliza horizontalmente
    alignItems: 'center',      // Alinha na direção transversal (vertical)
    marginTop: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10,  // Adiciona espaçamento entre a imagem e o texto
    alignItems: 'flex-start',  // Garante que o texto fique alinhado à esquerda
  },
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 24,
    color: '#007AFF',
  },
  boldText: {
    fontFamily: 'Poppins_700Bold',
  },
  welcomeText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    marginTop: 4,
    color: '#007AFF',
  },
});

export default List