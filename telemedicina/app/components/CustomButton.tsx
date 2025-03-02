import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CustomButton extends React.Component { 
    render() { 
        const { backgroundColor, onPress, text } = this.props;
        const buttonBackgroundColor = backgroundColor || '#5996D8'; // Caso não passe background, usa o padrão

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonBackgroundColor }]} onPress={onPress}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 16,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});