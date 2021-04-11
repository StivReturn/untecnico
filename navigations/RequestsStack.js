import React from 'react'
import {} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function RequestsStack() {
    return (
        <Stack.StackNavigator>
            <Stack.screen
                name ="requests"
                component={Requests}
                options={{ title: "Solicitar Servicios"}}
            />
        </Stack.StackNavigator>
    )
}
