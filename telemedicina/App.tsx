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


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerStyle: {backgroundColor: '#2B44BD'},
        headerTitleStyle: {
          fontFamily: 'Poppins_500Medium', // Defina a fonte que deseja
          fontSize: 20, // Tamanho da fonte
          fontWeight: 'bold', // Peso da fonte
          color: '#FFFFFF', // Cor do texto
        },
        headerLeft: () => (
          // <Button
          //   onPress={() => console.log('Botão Esquerdo Pressionado')}
          //   title="Esquerdo"
          //   color="#FFFFFF"
          // />
          <View>
            <TouchableOpacity>
              <Image source={require('./assets/menu.png')} style={{ width: 25, height: 25, marginLeft: 5 }} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          // <Button
          //   onPress={() => console.log('Botão Direito Pressionado')}
          //   title="Direito"
          //   color="#FFFFFF"
          // />
          <View>
            <TouchableOpacity>
              <Image source={require('./assets/x.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <InsideStack.Screen name="HOME" component={List}/>
      <InsideStack.Screen name="Details" component={Details}/>
    </InsideStack.Navigator>
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
          {user ? (<Stack.Screen name='Login' component={InsideLayout} options={{ headerShown: false }}/>) : (<Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
