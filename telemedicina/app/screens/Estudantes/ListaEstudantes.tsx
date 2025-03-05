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

const students = [
  { id: "1", name: "Ana Souza", avatar: "student_female.png" , year: 2018, matricula:'202148932'},
  { id: "2", name: "Carlos Mendes", avatar: "student_male.png" , year: 2021, matricula:'202048832'},
  { id: "3", name: "Fernanda Lima", avatar: "student_female.png" , year: 2025, matricula:'202348732'},
  { id: "4", name: "Ricardo Alves", avatar: "student_male.png" , year: 2015, matricula:'202248952'},
  { id: "5", name: "Beatriz Rocha", avatar: "student_female.png" , year: 2009, matricula:'201948902'},
];

const iconMap = {
  'student_male.png': require('../../../assets/student_male.png'),
  'student_female.png': require('../../../assets/student_female.png'),
};

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ListarEstudantes = ({ navigation }: RouterProps) => {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.matricula.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Searchbar
        style={{ marginBottom: 20 }}
        placeholder="Pesquisar estudante..."
        onChangeText={setSearch}
        value={search}
      />
      
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardCol}>
            <View style={styles.card}>
              <Image source={iconMap[item.avatar]} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.matricula}>{item.matricula}</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity>
                <CustomButton text="Ver Relatório" onPress={() => {
                      navigation.navigate('Relatorio', { studentData: item })
                   }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  cardCol: {
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
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  matricula: {
    fontSize: 12,
    color: "#000",
  },
});

export default ListarEstudantes;
