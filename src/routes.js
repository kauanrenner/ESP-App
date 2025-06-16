import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TempoReal } from "./Pages/Real";
import { Programado } from "./Pages/Programado";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Tempo Real"
                component={TempoReal}
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, size, color}) => {
                        if (focused) {
                            return <MaterialIcons name="watch-off" size={size} color={color}/>
                        }

                        return <MaterialIcons name="watch-off" size={size} color={color} />
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
                            return <MaterialIcons name="watch" size={size} color={color}/>
                        }

                        return <MaterialIcons name="watch" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
