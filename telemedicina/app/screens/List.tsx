import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import CustomButtonArea from '../components/CustomButtonArea';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <View style={styles.alertContainer}>
        <Image 
          source={require('../../assets/info.png')} 
          style={{ width: 25, height: 25, tintColor: '#92400e', marginRight: 5 }}
        />
        <Text style={styles.alertText}>
          Você ainda não finalizou seu cadastro. Para ter acesso a todas as funcionalidades, acesse o menu do seu perfil clicando aqui ou pelo menu no canto superior.
        </Text>
      </View>
      
      <View style={styles.profile}>
        <Image source={require('../../assets/doctor.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Olá <Text style={styles.boldText}>Usuário</Text>,</Text>
          <Text style={styles.welcomeText}>Seja Bem-Vindo(a).</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButtonArea badgeCount='3' onPress={() => navigation.navigate('Duvidas')} imagepath={require('../../assets/communication.png')} text="Acessar Dúvidas"/>
        <CustomButtonArea badgeCount='0' onPress={() => navigation.navigate('Duvidas')} imagepath={require('../../assets/report.png')} text="Gerar Relatório de Estagiário" />                    
        <CustomButtonArea badgeCount='0' onPress={() => navigation.navigate('Duvidas')} imagepath={require('../../assets/overview.png')} text="Visualizar Relatórios" />                    
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 23,
    padding: 48,
    marginTop: 48,
  },
  alert: {
    backgroundColor: '#2B44BD',
    padding: 16,
    borderRadius: 10,
    // flex:1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'absolute',
    // alignSelf: 'center',
    // top: '50%',
    // transform: [{ translateY: -50 }],
    
  },
  alerttext: {
    color: 'white',
    fontSize: 14,
    // textAlign: 'center',
  },
  alertContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    padding: 10, 
    backgroundColor: '#fde68a',
    borderRadius: 5,
    width: '90%',
  },
  alertText: {
    color: '#92400e',
    fontSize: 14,
    flex: 1, 
    verticalAlign: 'top',
    fontFamily: 'Poppins_400Regular_Italic',
  }
});

export default List;