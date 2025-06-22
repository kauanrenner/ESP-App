import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TempoReal } from "./Pages/Real";
import { Programado } from "./Pages/Programado";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { View, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator swipeEnabled={true} tabBarPosition="bottom" screenOptions={{tabBarStyle:{height:60, backgroundColor:"grey"}}}>
            <Tab.Screen
                name="Tempo Real"
                component={TempoReal}
                options={{
                    tabBarLabel:({focused}) => (
                        <View style={{alignItems:"center"}}>
                            <MaterialIcons 
                                name="watch-off"
                                size={focused ? 30 : 26}
                                color={focused ? "white" : "lightgray"}
                            />
                            <Text style={{ color: focused ? 'white' : 'lightgray', fontSize: 14, fontWeight: focused ? "bold" : "normal" }}>Tempo Real</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Programado"
                component={Programado}
                options={{
                    tabBarLabel:({focused}) => (
                        <View style={{alignItems:"center"}}>
                            <MaterialIcons 
                                name="watch"
                                size={focused ? 30 : 26}
                                color={focused ? "white" : "lightgray"}
                            />
                            <Text style={{ color: focused ? 'white' : 'lightgray', fontSize: 14, fontWeight: focused ? "bold" : "normal" }}>Programado</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
