import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Services from '../screens/Services'

export default function ServicesStack() {
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

const styles = StyleSheet.create({})
