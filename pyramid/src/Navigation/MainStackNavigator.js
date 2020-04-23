import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home.js'
import Instructions from '../Screens/Instructions.js'
import Setup from '../Screens/Setup.js';
import Game from '../Screens/Game.js';
import Statistics from '../Screens/Statistics.js';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' 
        screenOptions={{
          gestureEnabled: true
        }}>
            <Stack.Screen name='Home' component={Home}
            options={{
                title: 'Inicio',
                headerStyle: {
                    backgroundColor: '#d1625a'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name='Instructions' component={Instructions} 
            options={{
                title: 'Instrucciones',
                headerStyle: {
                    backgroundColor: '#d1625a'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name='Setup' component={Setup} 
            options={{
                title: 'Variables',
                headerStyle: {
                    backgroundColor: '#d1625a'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name='Game' component={Game} 
            options={{
                title: 'Juego',
                headerStyle: {
                    backgroundColor: '#d1625a'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign:"center"
            }}/>
            <Stack.Screen name='Statistics' component={Statistics} 
            options={{
                title: 'Resultados',
                headerStyle: {
                    backgroundColor: '#d1625a'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTitleAlign:"center"
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;