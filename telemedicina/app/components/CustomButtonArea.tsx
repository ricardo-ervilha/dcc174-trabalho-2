import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomButtonArea = ({ imagepath,  text }) => {
  return (
    <View style={styles.container}>
        <Image source={imagepath} style={{ width: 60, height: 60 }} />
        <Text style={styles.text}>{text}</Text>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 6, // Raio de difusão da sombra
    elevation: 10, // Propriedade para Android (simula a sombra)
  },
  text:{
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    marginTop: 8,
  }
});

export default CustomButtonArea;
