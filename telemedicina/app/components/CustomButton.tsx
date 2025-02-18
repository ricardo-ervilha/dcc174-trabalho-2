import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default class CustomButton extends React.Component { 
    render() { 
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Press Here</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#5996D8',
    padding: 10,
    borderRadius: 8,
  },
  text:{
    color: "#FFFFFF",
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});