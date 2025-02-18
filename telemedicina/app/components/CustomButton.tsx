import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default class CustomButton extends React.Component { 
    render() { 
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text onPress={this.props.onPress} style={styles.text}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5996D8',
    padding: 10,
    borderRadius: 6,
  },
  text:{
    color: "#FFFFFF",
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 16
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});