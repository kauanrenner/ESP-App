import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, StatusBar } from "react-native"
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import axios from "axios"

export function Programado() {
    const [isEnabled, setIsEnabled] = useState(false)
    const [show, setShow] = useState(false)
    const [time, setTime] = useState(new Date())

    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const onChange = (event, selectedTime) => {
        setShow(false);
        if (selectedTime) setTime(selectedTime);
    }

    const atualizaParametro = async () => {
        if (isEnabled) {
            await axios.get(`https://render-server-2itn.onrender.com/cliente?horario=${time.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}&modo=horario`)
                .then(response => console.log(response.data))
        } else if (!isEnabled) {
            await axios.get(`https://render-server-2itn.onrender.com/cliente?intervalo=${time.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}&modo=intervalo`)
                .then(response => console.log(response.data))
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"light-content"} />
            <View style={styles.modo}>
                <Text style={styles.textoTopo}>Utilizar Hora Exata</Text>
                <Switch 
                    trackColor={{false: "white", true: "#2b58de"}}
                    thumbColor={isEnabled ? "#2b58de" : "white"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.proximo}>
                <TouchableOpacity style={styles.btnConteudo} onPress={() => DateTimePickerAndroid.open({
                    value:time,
                    onChange,
                    mode:"time",
                    is24Hour:true,
                    display:"clock"
                })}>
                    <Text style={styles.textoProximo}>Horário ou Intervalo = {time.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.atualizar}>
                <TouchableOpacity style={styles.btnAtualizar} onPress={atualizaParametro}>
                    <Text style={styles.txtAtualizar}>Atualizar Horários</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2e2e2e",
        paddingTop:40,
        justifyContent:"flex-start"
    },
    modo: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    btnConteudo:{
        backgroundColor:"#808080",
        opacity:0.8,
        borderRadius:8,
        width:"90%",
        justifyContent:"center",
        alignItems:'center'
    },
    textoTopo:{
        fontSize:30,
        color:"white",
        paddingRight:50,
        paddingBottom:5
    },
    proximo:{
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft:10,
        paddingTop:300,
        flexDirection:"row"
    },
    textoProximo:{
        color:"white",
        fontSize:28,
        padding:10
    },
    intervalo:{
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft:10,
        paddingTop:30,
        flexDirection:"row"
    },
    textoIntervalo:{
        color:"white",
        fontSize:28,
        padding:10
    },
    atualizar:{
        paddingTop:250,
        justifyContent:"center",
        alignItems:"center"
    },
    btnAtualizar:{
        backgroundColor:"#2b57de",
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    },
    txtAtualizar:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        padding:10
    }
})
