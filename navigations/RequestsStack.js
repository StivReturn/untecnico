import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Requests from '../screens/Requests'
import Services from '../screens/Services'

const Stack = createStackNavigator()

export default function RequestsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name ="services"
                component= {Services}
                options={{ title: "Solicitar Servicios"}}
            />
        </Stack.Navigator>
    )
}
