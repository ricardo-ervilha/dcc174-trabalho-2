import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import CustomButtonArea from '../components/CustomButtonArea';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profile}>
        <Image source={require('../../assets/doctor.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Olá <Text style={styles.boldText}>André</Text>,</Text>
          <Text style={styles.welcomeText}>Seja Bem-Vindo(a).</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButtonArea onPress={() => navigation.navigate('Duvidas')} imagepath={require('../../assets/communication.png')} text="Acessar Dúvidas"/>
        <CustomButtonArea onPress={() => navigation.navigate('Duvidas')} imagepath={require('../../assets/report.png')} text="Relatório de Estagiário" />                    
        {/* <Button onPress={() => navigation.navigate('Duvidas')} title="Open Details"/> */}
        {/* <Button onPress={() => navigation.navigate('Details')} title="Open Details"/> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    alignItems: 'flex-start',
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 23,
    padding: 48,
    marginTop: 48,
  },
});

export default List;