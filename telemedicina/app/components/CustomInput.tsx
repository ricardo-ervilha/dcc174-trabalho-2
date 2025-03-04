// Input.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInput = ({ value, onChangeText, placeholder, style, secureTextEntry=false, keyboardType="default" }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        mode="flat"
        theme={{ colors: { primary: '#2B44BD', underlineColor: 'transparent' } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    fontFamily: 'Poppins_500Medium',
  },
  pizzaText: {
    padding: 10,
    fontSize: 42,
  },
});

export default CustomInput;
