import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CustomButtonArea = ({ imagepath, text, onPress, badgeCount }) => {
  // const badgeCount = 3;
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imagepath} style={{ width: 60, height: 60 }} />
      
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
      
      <Text style={styles.text}>{text}</Text>    
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center'
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
});

export default CustomButtonArea;
