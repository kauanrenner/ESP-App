import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function TempoReal() {

  const [estado, setEstado] = useState("");

  const ligaLED = async () => {
    try {
      await axios.get("https://render-server-2itn.onrender.com/led=on")
        .then(response => {
          setEstado(response.data.estado)
        })
    } catch (error) {
      console.log("Erro: ", error)
    }
  }

  const desligaLED = async () => {
    try {
      await axios.get("https://render-server-2itn.onrender.com/led=off")
        .then(response => {
          setEstado(response.data.estado)
        })
    } catch (error) {
      console.log("Erro: ", error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <TouchableOpacity style={styles.botao} onPress={ligaLED}>
        <Text style={styles.text}>Abrir Tampa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={desligaLED}>
        <Text style={styles.text}>Fechar Tampa</Text>
      </TouchableOpacity>
      <Text style={styles.estado}>Estado atual:</Text>
      <Text style={styles.estado}>{estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 10
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    padding: 10
  },
  estado: {
    fontSize: 30,
    color:"white",
    fontWeight:"bold"
  }
});
