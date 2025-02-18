import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class LargeTextInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          multiline
          numberOfLines={5}
        />
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
  input: {
    height: 150,
    borderColor: '#5996D8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'top',
  }
});
