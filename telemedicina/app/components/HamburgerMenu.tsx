import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, Animated, Dimensions, Image, StyleSheet, TouchableWithoutFeedback 
} from 'react-native';

const { width, height } = Dimensions.get('window');

const HamburgerMenu = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const translateX = useState(new Animated.Value(-width / 2))[0]; // Posição inicial do menu (fora da tela)

  const toggleMenu = () => {
    const newMenuVisible = !menuVisible;
    setMenuVisible(newMenuVisible);
    Animated.timing(translateX, {
      toValue: newMenuVisible ? 0 : -width / 2, // Move o menu para dentro ou para fora da tela
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      {/* Ícone para abrir o menu */}
      {!menuVisible && (
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      )}

      {/* Overlay para capturar toques quando o menu estiver visível */}
      {menuVisible && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Menu deslizando */}
      <Animated.View 
        style={[styles.menu, { transform: [{ translateX }] }]}
        pointerEvents={menuVisible ? 'auto' : 'none'} // Desativa interações quando o menu estiver fechado
      >
        <View style={styles.menuContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={styles.menuItem}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Ícone para fechar o menu */}
        {menuVisible && (
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <Image source={require('../../assets/x.png')} style={styles.closeIcon} />
          </TouchableOpacity>
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 9999,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width / 2, // Menu ocupa metade da largura da tela
    height: '100%', // Garante que o menu cubra toda a altura da tela
    backgroundColor: '#2B44BD', // Fundo azul total
    zIndex: 9999,
  },
  menuContent: {
    flex: 1, // Ocupa toda a área disponível dentro do menu
    justifyContent: 'flex-start',
    alignItems: 'stretch', // Garante que os itens ocupem toda a largura do menu
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#2B44BD', // Certifica que tudo dentro do menu seja azul
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.3)', // Fundo escuro para destacar o menu
    zIndex: 9997,
  }
});

export default HamburgerMenu;
