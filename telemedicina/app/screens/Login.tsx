import { View, Image, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, BackHandler, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const auth = FIREBASE_AUTH;

    const validateInputs = () => {
        if (!email || !password) {
            setErrorMessage('Preencha ambos os campos!');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('E-mail inválido!');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const signIn = async () => {
        if (!validateInputs()) return;
        setLoading(true);

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            setErrorMessage('Falha no login. Informe e-mail e senha corretos.');
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        if (!validateInputs()) return;
        setLoading(true);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.log(error);
            setErrorMessage('Falha no cadastro: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.x}>
                <TouchableOpacity onPress={() => BackHandler.exitApp()}>
                    <Image source={require('../../assets/x.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.image}>
                <Image source={require('../../assets/logo_salus.png')} style={{ width: 300, height: 300 }} />
            </View>

            <KeyboardAvoidingView behavior='padding'>
                <CustomInput value={email} placeholder='E-mail' autoCapitalize='none' onChangeText={setEmail} />
                <CustomInput secureTextEntry value={password} placeholder='Senha' autoCapitalize='none' onChangeText={setPassword} />

                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

                {loading ? <ActivityIndicator size='large' color='#0000ff' /> : (
                    <>
                        <CustomButton text='Entrar' onPress={signIn} />
                        <CustomButton text='Cadastrar-se' onPress={signUp} />
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    x:{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        marginTop: 10,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        fontFamily: 'Poppins_500Medium',
        marginBottom: 10,
        marginLeft: 10,
        color: 'red',
    },
});
