import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Requests from '../screens/Requests'

const Stack = createStackNavigator()

export default function RequestsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name ="request"
                component= {Requests}
                options={{ title: "Solicitar Servicios"}}
            />
        </Stack.Navigator>
    )
}
