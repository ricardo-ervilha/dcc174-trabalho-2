import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

import LargeTextInput from "../../components/TextArea";

const RelatorioEstudante = ({ route, navigation }) => {
  const { studentData } = route.params || { studentData: null };

  const [avaliacao, setAvaliacao] = useState("");
  const [desempenho, setDesempenho] = useState("");

  if (!studentData) {
    return <Text>Erro ao carregar os dados do estudante.</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/student_icon.png")} style={styles.icon} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{studentData.name}</Text>
          <Text style={styles.matricula}>{studentData.matricula}</Text>
        </View>
      </View>

      <View style={styles.detailBox}>
        {/* <Text style={styles.detailText}>Curso: {studentData.course}</Text> */}
        <Text style={styles.detailText}>Período de Ingresso: {studentData.year}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Avaliação</Text>
        <LargeTextInput value={avaliacao} onChangeText={setAvaliacao} placeholder="Escreva a avaliação..." />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Desempenho Técnico-Científico</Text>
        <LargeTextInput value={desempenho} onChangeText={setDesempenho} placeholder="Escreva sobre o desempenho..." />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton text="Voltar" backgroundColor="#FF6347" onPress={() => navigation.goBack()} />
        <View style={styles.buttonSpacing} />
        <CustomButton text="Salvar" onPress={() => alert("Relatório salvo!")} />
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
  matricula : {
    fontSize: 12,
    color: "#ffffff"
  },
  detailBox: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#2B44BD",
  },
  detailText: {
    fontSize: 14,
    color: "#333",
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonSpacing: {
    width: 10,
  },
});

export default RelatorioEstudante;
