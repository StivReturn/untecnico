import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Chat from '../screens/Chat'

const Stack = createStackNavigator()

export default function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="chat"
                component={Chat}
                options={{title: "Chats"}} 
            />
        </Stack.Navigator>
    )
}
