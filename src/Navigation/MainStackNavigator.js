import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home.js'
import Modes from '../Screens/Modes.js';
import SetupNormal from '../Screens/Normal/SetupNormal.js';
import GameNormal from '../Screens/Normal/GameNormal.js';
import Statistics from '../Screens/Statistics.js';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false
                }}>
                <Stack.Screen name='Home' component={Home}
                    options={{
                        title: 'Inicio',
                        headerStyle: {
                            backgroundColor: '#474442'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: "center"
                    }} />
                <Stack.Screen name='SetupNormal' component={SetupNormal}
                    options={{
                        title: 'Variables',
                        headerStyle: {
                            backgroundColor: '#474442'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: "center"
                    }} />
                <Stack.Screen name='Modes' component={Modes}
                    options={{
                        title: 'Modos',
                        headerStyle: {
                            backgroundColor: '#474442'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: "center"
                    }} />
                <Stack.Screen name='GameNormal' component={GameNormal}
                    options={{
                        title: 'Juego',
                        headerStyle: {
                            backgroundColor: '#474442'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: "center"
                    }} />
                <Stack.Screen name='Statistics' component={Statistics}
                    options={{
                        title: 'Resultados',
                        headerStyle: {
                            backgroundColor: '#474442'
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        headerTitleAlign: "center"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;