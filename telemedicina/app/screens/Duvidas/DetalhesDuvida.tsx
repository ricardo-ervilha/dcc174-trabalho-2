import React,{useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const DetalhesDuvida = ({ route, navigation }) => {
  // Desestruturando os dados passados pela navegação
  const { questionData } = route.params;
  const [resposta, setResposta] = useState("");

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require("../../../assets/patient_male.png")} style={styles.icon} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{questionData.title}</Text>
        </View>
      </View>

      {/* Campo de dúvida detalhada */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{questionData.description}</Text>
      </View>

      {/* Campo de resposta */}
      <View>
      <CustomInput
        value={resposta}
        onChangeText={setResposta}
        placeholder="Aqui você pode escrever sua resposta..."
        style={styles.responseText}
      />
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
  );
};

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
    fontSize: 14,
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

export default DetalhesDuvida;
