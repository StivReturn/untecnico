import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterUserForm from '../../components/account/RegisterTechnicalForm'
import RegisterTechnicalForm from '../../components/account/RegisterTechnicalForm'
import {UserType} from '../../components/account/UserType'

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../assets/UnTecnico.png")}
                resizeMode="contain"
                style={styles.image}
            />            
            <UserType/>            
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image : {
        height: 150,
        width: "100%",
        marginBottom: 20
    }
})