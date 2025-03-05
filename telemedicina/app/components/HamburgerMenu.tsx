import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, Animated, Dimensions, Image, StyleSheet, TouchableWithoutFeedback 
} from 'react-native';
import ConfirmExitModal from './ConfirmationModal';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const { width, height } = Dimensions.get('window');

const HamburgerMenu = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const translateX = useState(new Animated.Value(-width))[0]; // Posição inicial do menu (fora da tela)

  const [modalVisible, setModalVisible] = useState(false);
  
  const handleConfirmExit = () => {
    setModalVisible(false);
    FIREBASE_AUTH.signOut();
  };

  const toggleMenu = () => {
    const newMenuVisible = !menuVisible;
    setMenuVisible(newMenuVisible);
    Animated.timing(translateX, {
      toValue: newMenuVisible ? 0 : -width, // Move o menu para dentro ou para fora da tela
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
          <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('Cadastrar Dúvida')}>
            <Image source={require('../../assets/decision-making.png')} style={styles.closeIcon} />
            <Text style={styles.menuItem}>Cadastrar Dúvida</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('Duvidas')}>
            <Image source={require('../../assets/communication.png')} style={styles.closeIcon} />
            <Text style={styles.menuItem}>Acessar Dúvidas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('Estagiarios')}>
            <Image source={require('../../assets/report.png')} style={styles.closeIcon} />
            <Text style={styles.menuItem}>Gerar Relatório de Estagiário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('Relatorio')}>
            <Image source={require('../../assets/overview.png')} style={styles.closeIcon} />
            <Text style={styles.menuItem}>Visualizar Relatórios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItemContainer}  onPress={() => setModalVisible(true)}>
            <Image source={require('../../assets/logout.png')} style={styles.closeIcon} />
            <Text style={styles.menuItem}>Logout</Text>
          </TouchableOpacity>
          <ConfirmExitModal
            textModal="Tem certeza que deseja sair do aplicativo?"
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onConfirm={handleConfirmExit}
          />
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
  menuItemContainer: {
    flexDirection: 'row', // Alinha os itens na horizontal
    alignItems: 'flex-start', // Alinha verticalmente no centro
    padding: 10, // Espaçamento interno
    backgroundColor: '#2B44BD'
  },
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
    width: width, // Menu ocupa metade da largura da tela
    height: '1500%', // Garante que o menu cubra toda a altura da tela
    backgroundColor: '#2B44BD', // Fundo azul total
    zIndex: 9999,
  },
  menuContent: {
    flex: 1, // Ocupa toda a área disponível dentro do menu
    justifyContent: 'flex-start',
    alignItems: 'stretch', // Garante que os itens ocupem toda a largura do menu
    paddingTop: 100,
    padding: 20,
    backgroundColor: '#2B44BD', // Certifica que tudo dentro do menu seja azul
  },
  menuItem: {
    color: '#fff',
    // fontSize: 18,
    marginBottom: 20,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16, 
    // color: '#333',
    backgroundColor: '#2B44BD',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeIcon: {
    // width: 30,
    // height: 30,
    tintColor: '#ffffff',
    width: 20, 
    height: 20, 
    marginRight: 10
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
