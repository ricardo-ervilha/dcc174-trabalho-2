import React from 'react';
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';

export default class CustomButton extends React.Component { 
    render() { 
        const { backgroundColor, onPress, text } = this.props;
        const buttonBackgroundColor = backgroundColor || '#5996D8'; // Cor padrão se não for passada

        return (
            <View style={styles.container}>
                <Button 
                    mode="contained" 
                    onPress={onPress} 
                    buttonColor={buttonBackgroundColor}
                    textColor="#FFFFFF"
                    style={styles.button}
                    labelStyle={styles.text}
                >
                    {text}
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  button: {
    borderRadius: 6,
  },
  text: {
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 16,
  },
});