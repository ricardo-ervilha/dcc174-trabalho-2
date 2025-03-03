import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
export default class LargeTextInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          multiline
          numberOfLines={5}
          mode="outlined"
          theme={{ colors: { primary: '#2B44BD', underlineColor: 'transparent' } }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
    // marginBottom: 5,
    fontFamily: 'Poppins_500Medium',
  },
  input: {
    height: 150,
    borderColor: '#5996D8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 2,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
    fontFamily: 'Poppins_500Medium',
  }
});
