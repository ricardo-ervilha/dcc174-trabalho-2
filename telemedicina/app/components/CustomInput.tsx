// Input.js
import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, style, secureTextEntry, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused && styles.inputFocused]}
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
        backgroundColor: '#fff',
        fontFamily: 'Poppins_500Medium'
    },
    inputFocused: {
      borderColor: "transparent",
    },
});

export default CustomInput;
