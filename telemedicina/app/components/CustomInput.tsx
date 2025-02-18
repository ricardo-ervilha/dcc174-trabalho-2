// Input.js
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, style, secureTextEntry, keyboardType }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1, 
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});

export default CustomInput;
