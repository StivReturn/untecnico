import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Requests from '../screens/Requests'



export default function ServicesStack() {
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

const styles = StyleSheet.create({})
