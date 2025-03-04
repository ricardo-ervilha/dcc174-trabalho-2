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
import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { View, TouchableOpacity } from 'react-native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import DetalhesDuvida from './app/screens/Duvidas/DetalhesDuvida';
import ListaDuvidas from './app/screens/Duvidas/ListaDuvidas';
import { Image } from 'react-native';
import ListarEstudantes from './app/screens/Estudantes/ListaEstudantes';
import RelatorioEstudante from './app/screens/Estudantes/RelatorioEstudante';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmExit = () => {
    setModalVisible(false);
    FIREBASE_AUTH.signOut();
  };

  return (
    <>
      <InsideStack.Navigator
        screenOptions={{
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
            <HamburgerMenu navigation={navigator} />
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('./assets/x.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
              </TouchableOpacity>
            </View>
          ),
        }}
      >
        <InsideStack.Screen name="HOME" component={List} />
        <InsideStack.Screen name="Details" component={Details} />
        <InsideStack.Screen name="Dúvidas" component={ListaDuvidas} />
        <InsideStack.Screen name="Responder Dúvida" component={DetalhesDuvida} />
        <InsideStack.Screen name="Estagiarios" component={ListarEstudantes} />
        <InsideStack.Screen name="Relatorio" component={RelatorioEstudante} />
      </InsideStack.Navigator>
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
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen name="Home" component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
