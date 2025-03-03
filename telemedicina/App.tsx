import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import ConfirmExitModal from "./app/components/ConfirmationModal"; // Ajuste o caminho conforme necessário
import { BackHandler } from 'react-native';

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
import AppLoading from 'expo-app-loading';
import React from 'react';
import ListaDuvidas from './app/screens/Duvidas/ListaDuvidas';
import DetalhesDuvida from './app/screens/Duvidas/DetalhesDuvida';
import FlashMessage from 'react-native-flash-message';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmExit = () => {
    setModalVisible(false);
    BackHandler.exitApp();
    FIREBASE_AUTH.signOut();
  };

  return (
    <>
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
            headerLeft: () => (
              route.name === 'HOME' ? (
                <TouchableOpacity>
                  <Image source={require('./assets/menu.png')} style={{ width: 25, height: 25, marginLeft: 5 }} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={require('./assets/back.png')} style={{ width: 25, height: 25, marginLeft: 5 }} />
                </TouchableOpacity>
              )
            ),
            headerRight: () => (
              route.name !== 'HOME' ? (
                <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
                  <Image source={require('./assets/x.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
                </TouchableOpacity>
              ):undefined
            ),
          })}
>

      <InsideStack.Screen name="Home" component={List} />
      <InsideStack.Screen name="Details" component={Details}/>
      <InsideStack.Screen name="Duvidas" component={ListaDuvidas}  options={{ title: 'Dúvidas' }}/>
      <InsideStack.Screen name="ResponderDuvida" component={DetalhesDuvida} options={{ title: 'Responder Dúvida' }}/>
    </InsideStack.Navigator>
    <ConfirmExitModal
        textModal="Tem certeza que deseja sair do aplicativo?"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmExit}
      />
      <FlashMessage position="top" />
    </>
    
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => 
      {
        console.log('user', user);
        setUser(user);
      });
  }, [])

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

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? 
          (<Stack.Screen name='Login' component={InsideLayout} options={{ headerShown: false }}/>) : 
          (<Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
