import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TempoReal } from "./Pages/Real";
import { Programado } from "./Pages/Programado";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const Tab = createMaterialTopTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator swipeEnabled={true} tabBarPosition="bottom" screenOptions={{tabBarStyle:{height:60, backgroundColor:"grey"}, tabBarLabelStyle:{color:"white", fontSize:14}}}>
            <Tab.Screen
                name="Tempo Real"
                component={TempoReal}
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <MaterialIcons name="watch-off" size={size+4} color={"white"}/>
                        }

                        return <MaterialIcons name="watch-off" size={size} color={"white"} />
                    }
                }}
            />
            <Tab.Screen
                name="Programado"
                component={Programado}
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <MaterialIcons name="watch" size={size+4} color={"white"}/>
                        }

                        return <MaterialIcons name="watch" size={size} color={"white"} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
