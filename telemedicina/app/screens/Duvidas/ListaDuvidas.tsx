import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Searchbar } from 'react-native-paper';
import CustomButton from "../../components/CustomButton";
import { NavigationProp } from '@react-navigation/native'

const questions = [
  {
    id: "1",
    title: "Paciente com Arritmia e Palpitações",
    description:
      "Qual a melhor abordagem diagnóstica e terapêutica para um paciente com episódios recorrentes de palpitação e Holter com extrassístoles ventriculares?",
    author: "Sebastião",
    patientIcon: 'patient_male.png',
  },
  {
    id: "2",
    title: "Crises Convulsivas de Origem Indeterminada",
    description:
      "Paciente sem histórico de epilepsia apresentou crise convulsiva. Como conduzir a investigação inicial?",
    author: "Manoel",
    patientIcon: 'patient_male.png',
  },
  {
    id: "3",
    title: "Asma Grave Não Controlada",
    description:
      "Paciente asmático em uso de corticoide inalatório e beta-agonista de longa ação, mas ainda com crises. Qual a alternativa terapêutica?",
    author: "Yan",
    patientIcon: 'patient_female.png',
  },
  {
    id: "4",
    title: "Hipertensão Arterial Resistente",
    description:
      "Paciente com pressão arterial elevada apesar do uso de múltiplos anti-hipertensivos. Qual seria a conduta mais indicada?",
    author: "Ana",
    patientIcon: 'patient_female.png',
  },
  {
    id: "5",
    title: "Diabetes Mellitus Tipo 2 Mal Controlado",
    description:
      "Paciente diabético tipo 2 com controle glicêmico inadequado, apesar de dieta e medicação. Quais as próximas opções terapêuticas?",
    author: "Carlos",
    patientIcon: 'patient_male.png',
  },
  {
    id: "6",
    title: "Síndrome do Pânico",
    description:
      "Paciente com episódios recorrentes de ansiedade e ataques de pânico. Quais são as opções de tratamento eficazes?",
    author: "Beatriz",
    patientIcon: 'patient_female.png',
  },
  {
    id: "7",
    title: "Depressão Grave com Ideação Suicida",
    description:
      "Paciente com quadro de depressão grave e ideação suicida. Quais são as intervenções imediatas mais adequadas?",
    author: "Ricardo",
    patientIcon: 'patient_male.png',
  },
  {
    id: "8",
    title: "Câncer de Pulmão Estádio Avançado",
    description:
      "Paciente com câncer de pulmão em estágio avançado, com dor e dispneia. Quais são as opções de controle sintomático?",
    author: "Fernanda",
    patientIcon: 'patient_female.png',
  },
  {
    id: "9",
    title: "Infecção Urinária Refratária",
    description:
      "Paciente com infecção urinária recorrente e refratária ao tratamento com antibióticos convencionais. Como proceder?",
    author: "Lucas",
    patientIcon: 'patient_male.png',
  },
  {
    id: "10",
    title: "Acidente Vascular Cerebral Isquêmico",
    description:
      "Paciente com AVC isquêmico recente. Quais são as principais medidas para a prevenção de novos eventos?",
    author: "Mariana",
    patientIcon: 'patient_female.png',
  },
  {
    id: "11",
    title: "Doença de Parkinson",
    description:
      "Paciente com diagnóstico recente de doença de Parkinson. Qual é o tratamento inicial indicado para controle dos sintomas?",
    author: "Eduardo",
    patientIcon: 'patient_male.png',
  },
  {
    id: "12",
    title: "Síndrome Nefrótica",
    description:
      "Paciente com diagnóstico de síndrome nefrótica. Qual é a conduta mais eficaz para controle da proteinúria?",
    author: "Paula",
    patientIcon: 'patient_female.png',
  },
  {
    id: "13",
    title: "Acne Vulgar Grave",
    description:
      "Paciente com acne vulgar grave, não controlada por terapia tópica. Qual o próximo passo no tratamento?",
    author: "Fabio",
    patientIcon: 'patient_male.png',
  },
  {
    id: "14",
    title: "Dermatite Atópica em Adulto",
    description:
      "Paciente adulto com dermatite atópica persistente e resistência ao tratamento tópico. Quais as alternativas terapêuticas?",
    author: "Luana",
    patientIcon: 'patient_female.png',
  },
  {
    id: "15",
    title: "Doença Celíaca Não Diagnosticada",
    description:
      "Paciente com sintomas gastrointestinais crônicos, mas sem diagnóstico definido. Qual a conduta para investigar a doença celíaca?",
    author: "Ricardo",
    patientIcon: 'patient_male.png',
  },
];


const iconMap = {
  'patient_male.png': require('../../../assets/patient_male.png'),
  'patient_female.png': require('../../../assets/patient_female.png'),
};


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ListaDuvidas = ({ navigation }: RouterProps) => {
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barra de pesquisa */}
      <Searchbar
        style={{ marginBottom: 20 }}
        placeholder="Pesquisar dúvidas..."
        onChangeText={setSearch}
        value={search}
      />
      
      <FlatList
        data={filteredQuestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // Obter o ícone usando o mapeamento
          const patientIcon = iconMap[item.patientIcon];

          return (
              <View style={styles.cardCol}>
                <View style={styles.card}>
                  <Image source={patientIcon} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.author}>Enviado Por: {item.author}</Text>
                  </View>
                </View>
                <View style={{marginTop:20}}>
                  <TouchableOpacity>
                  <CustomButton text="Responder" onPress={() => {
                        navigation.navigate('Responder Dúvida', 
                          {questionData: item})
                     }}
                    />
                    {/* <Button onPress={() => navigation.navigate('Details')} title="Open Details"/> */}
                  </TouchableOpacity>
                </View>
              </View>
          );
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  cardCol:{
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#606060",
    marginVertical: 5,
  },
  author: {
    fontSize: 12,
    color: "#808080",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#2B44BD",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: 'flex-end',  // Alinha o botão à direita
    marginTop: 20,  // Espaço entre os campos e o botão
  },
});

export default ListaDuvidas;
