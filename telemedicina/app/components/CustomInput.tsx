// Input.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

const CustomInput = ({ value, onChangeText, placeholder, style, secureTextEntry, keyboardType }) => {
  
  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        mode="outlined"
        theme={{colors: {primary: '#2B44BD', underlineColor: 'transparent'}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
        // marginVertical: 4,
        // height: 50,
        // borderWidth: 1, 
        // borderRadius: 4,
        // backgroundColor: '#fff',
        fontFamily: 'Poppins_500Medium'
    }
});

export default CustomInput;
