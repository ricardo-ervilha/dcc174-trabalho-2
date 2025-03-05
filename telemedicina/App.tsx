// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import AppLoading from 'expo-app-loading';
import Login from './app/screens/Login';
import HamburgerMenu from './app/components/HamburgerMenu'; // Importando o menu deslizante
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { View, TouchableOpacity } from 'react-native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import DetalhesDuvida from './app/screens/Duvidas/DetalhesDuvida';
import ListaDuvidas from './app/screens/Duvidas/ListaDuvidas';
import { Image } from 'react-native';
import ListarEstudantes from './app/screens/Estudantes/ListaEstudantes';
import RelatorioEstudante from './app/screens/Estudantes/RelatorioEstudante';
import FlashMessage from 'react-native-flash-message';
import ConfirmExitModal from './app/components/ConfirmationModal';
import CadastrarDuvida from './app/screens/CadastrarDuvida';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmExit = () => {
    setModalVisible(false);
    FIREBASE_AUTH.signOut();
  };

  return (
    <>
      {/* Adicionando o menu hambúrguer */}
      <HamburgerMenu navigation={navigation} />

      <InsideStack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          contentStyle: { backgroundColor: '#ffffff' },
          headerStyle: { backgroundColor: '#2B44BD' },
          headerTitleStyle: {
            fontFamily: 'Poppins_500Medium',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          headerRight: () =>
            route.name !== 'HOME' ? (
              <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
                <Image source={require('./assets/x.png')} style={{ width: 20, height: 20, marginRight: 10, tintColor: 'white' }} />
              </TouchableOpacity>
            ) : undefined,
        })}
      >
        <InsideStack.Screen name="Home" component={List} />
        <InsideStack.Screen name="Details" component={Details} />
        <InsideStack.Screen name="Duvidas" component={ListaDuvidas} options={{ title: 'Dúvidas' }} />
        <InsideStack.Screen name="ResponderDuvida" component={DetalhesDuvida} options={{ title: 'Responder Dúvida' }} />
        <InsideStack.Screen name="Estagiarios" component={ListarEstudantes} />
        <InsideStack.Screen name="Relatorio" component={RelatorioEstudante} />
        <InsideStack.Screen name="Cadastrar Dúvida" component={CadastrarDuvida} />

      </InsideStack.Navigator>

      <ConfirmExitModal
        textModal="Tem certeza que deseja sair do aplicativo?"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmExit}
      />
      <FlashMessage position="top" />
    </>
  );
}


export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? (
            <Stack.Screen name='Login' component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
