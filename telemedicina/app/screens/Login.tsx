import { View, Image, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);

        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch(error : any){
            console.log(error);
            alert('Sign in failed ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert("Check your emails!");
        } catch(error: any){
            console.log(error);
            alert('Sign up failed ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../assets/logo_salus.png')} style={{width: 300, height: 300}}/>
            </View>
            
            <KeyboardAvoidingView behavior='padding'>
                <CustomInput value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></CustomInput>
                
                <CustomInput secureTextEntry={true} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></CustomInput>

                {loading ? <ActivityIndicator size="large" color="#0000ff"/> : 
                <>
                    <CustomButton text="Entrar" onPress={signIn}/>
                    <CustomButton text="Cadastrar-se" onPress={signUp}/>
                </>
                }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 20,
        flex: 1, 
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1, 
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
})