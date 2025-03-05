import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LargeTextInput from '../components/TextArea'

import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import RNPickerSelect from 'react-native-picker-select';

const CadastrarDuvida = ({ route, navigation }) => {
   const [nome, setNome] = useState('');
   const [idade, setIdade] = useState('');
   const [altura, setAltura] = useState('');
   const [peso, setPeso] = useState('');
   const [resposta, setResposta] = useState(''); 
   return (
    <View style={styles.container}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Image source={require("../../assets/patient_male.png")} style={styles.icon} />
            <View style={styles.headerText}>
              <Text style={styles.title}>Cadastrar Dúvida</Text>
            </View>
          </View>
    
          {/* Campo de dúvida detalhada */}
          <View style={styles.questionBox}>
          <CustomInput value={nome} placeholder='Nome' autoCapitalize='none' onChangeText={setNome} />
          <CustomInput value={idade} placeholder='Idade (anos)' autoCapitalize='none' onChangeText={setIdade} />
          <View style={{marginVertical: 5, marginBottom: 20}}>
              <RNPickerSelect
                    placeholder={{ label: "Gênero", value: null }} // Certifique-se de que value é null
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "Masculino", value: "masculino" },
                        { label: "Feminino", value: "feminino" },
                        { label: "Outro", value: "outro" },
                    ]}
                    style={pickerSelectStyles} // Aplicando o estilo
                />
          </View>
            <CustomInput value={altura} placeholder='Altura (cm)' autoCapitalize='none' onChangeText={setAltura} />
            <CustomInput value={peso} placeholder='Peso (Kg)' autoCapitalize='none' onChangeText={setPeso} />
            <View style={{marginVertical: 5}}>
                <RNPickerSelect
                    placeholder={{ label: "Nível de Atividade", value: null }} // Certifique-se de que value é null
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "Frequentemente", value: "masculino" },
                        { label: "De vez em quando", value: "feminino" },
                        { label: "Nunca", value: "outro" },
                    ]} // Aplicando o estilo
                />
            </View>
            <View style={{marginVertical: 5}}>
            <RNPickerSelect
                placeholder={{ label: "Fumante", value: null }} 
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "Sim", value: "sim" },
                    { label: "Não", value: "nao" },
                ]}
                style={{
                    ...pickerSelectStyles, // Aplica os estilos corretamente
                    inputIOS: { ...pickerSelectStyles.inputIOS },
                    inputAndroid: { ...pickerSelectStyles.inputAndroid },
                }}
                useNativeAndroidPickerStyle={false} // Necessário para aplicar os estilos no Android
            />

            </View>

            <label style={{marginTop: 10}} htmlFor="">Sintomas do Paciente</label>
            <LargeTextInput
                    value={resposta}
                    onChangeText={setResposta}
                    placeholder="Aqui você pode escrever sua resposta..."
                    style={styles.responseText}
                  />

            <View style={{marginVertical: 5}}>
            <RNPickerSelect
                placeholder={{ label: "Especialidade", value: null }} 
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Ortopedia', value: 'ortopedia' },
  { label: 'Cardiologia', value: 'cardiologia' },
  { label: 'Dermatologia', value: 'dermatologia' },
  { label: 'Endocrinologia', value: 'endocrinologia' },
  { label: 'Gastroenterologia', value: 'gastroenterologia' },
  { label: 'Geriatria', value: 'geriatria' },
  { label: 'Ginecologia', value: 'ginecologia' },
  { label: 'Neurologia', value: 'neurologia' },
  { label: 'Oftalmologia', value: 'oftalmologia' },
  { label: 'Otorrinolaringologia', value: 'otorrinolaringologia' },
  { label: 'Pediatria', value: 'pediatria' },
  { label: 'Psiquiatria', value: 'psiquiatria' },
  { label: 'Reumatologia', value: 'reumatologia' },
  { label: 'Urologia', value: 'urologia' }
                ]}
                style={{
                    ...pickerSelectStyles, // Aplica os estilos corretamente
                    inputIOS: { ...pickerSelectStyles.inputIOS },
                    inputAndroid: { ...pickerSelectStyles.inputAndroid },
                }}
                useNativeAndroidPickerStyle={false} // Necessário para aplicar os estilos no Android
            />

            </View>
          </View>
    
          {/* Campo de resposta */}
          <View>
          
          </View>
    
            {/* Botões "Voltar" e "Responder" lado a lado */}
            <View style={styles.buttonContainer}>
                <CustomButton
                text={<Text>Voltar</Text>} // Wrap the text inside a <Text> component
                backgroundColor="#FF6347"
                onPress={() => navigation.goBack()} 
                />
                <View style={styles.buttonSpacing} />
                <CustomButton
                text={<Text>Responder</Text>} // Wrap the text inside a <Text> component
                onPress={() => alert("Respondido!")} 
                />
            </View>
        </View>
  )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // Para o ícone do dropdown,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        fontFamily: 'Poppins_500Medium',
    },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
    borderColor: "#2B44BD",
    borderWidth: 2,
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
    fontFamily: 'Poppins_500Medium',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B44BD",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    fontSize: 14,
    color: "#e0e0e0",
  },
  questionBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#2B44BD",
  },
  questionText: {
    fontSize: 20,
    color: "#333",
  },
  responseBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2B44BD",
    marginTop: 10,
    position: "relative",
  },
  responseText: {
    fontSize: 14,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: 'row',  // Coloca os botões lado a lado
    justifyContent: 'center',  // Alinha os botões ao centro horizontalmente
    marginTop: 20,  // Espaço entre os campos e os botões
  },
  buttonSpacing: {
    width: 10,  // Espaçamento entre os botões
  },
});


export default CadastrarDuvida