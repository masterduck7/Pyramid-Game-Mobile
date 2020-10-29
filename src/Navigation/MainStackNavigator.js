import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home.js'
import Modes from '../Screens/Modes.js';
import Statistics from '../Screens/Statistics.js';
import SetupNormal from '../Screens/Normal/SetupNormal.js';
import GameNormal from '../Screens/Normal/GameNormal.js';
import SetupBirthday from '../Screens/Birthday/SetupBirthday.js';
import GameBirthday from '../Screens/Birthday/GameBirthday.js';
import SetupMissile from '../Screens/Missile/SetupMissile.js';
import GameMissile from '../Screens/Missile/GameMissile.js';
import SetupArmageddon from '../Screens/Armageddon/SetupArmageddon.js';
import GameArmageddon from '../Screens/Armageddon/GameArmageddon.js';

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
                <Stack.Screen name='SetupBirthday' component={SetupBirthday}
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
                <Stack.Screen name='GameBirthday' component={GameBirthday}
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
                <Stack.Screen name='SetupMissile' component={SetupMissile}
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
                <Stack.Screen name='GameMissile' component={GameMissile}
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
                <Stack.Screen name='SetupArmageddon' component={SetupArmageddon}
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
                <Stack.Screen name='GameArmageddon' component={GameArmageddon}
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