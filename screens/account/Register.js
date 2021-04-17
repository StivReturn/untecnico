import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import RegisterUserForm from '../../components/account/RegisterUserForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Register() {
    return (
        <KeyboardAwareScrollView>
            <Image
            source={require("../../assets/UnTecnico.png")}
            resizeMode="contain"
            style={styles.image}
        />
            <RegisterUserForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: "100%",
        marginBottom: 40
    }    
})
