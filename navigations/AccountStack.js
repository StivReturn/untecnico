import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/account/Account'
import Login from '../screens/account/Login'
import UserType from '../components/account/UserType'
import RegisterTechnicalForm from '../components/account/RegisterTechnicalForm'
import RegisterUserForm from '../components/account/RegisterUserForm'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{title: "Cuenta"}} 
            />    
            <Stack.Screen
                name="login"
                component={Login}
                options={{title: "Iniciar Sesión"}} 
            />
            <Stack.Screen
                name="registeruser"
                component={RegisterUserForm}
                options={{title: "Registrar un Usuario"}} 
            />
            <Stack.Screen
                name="registertechnical"
                component={RegisterTechnicalForm}
                options={{title: "Registrar un Técnico"}} 
            />
            <Stack.Screen
                name="usertype"
                component={UserType}
                options={{title: "Tipo de Usuario"}} 
            />
        </Stack.Navigator>
    )
}
