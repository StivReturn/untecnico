import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon, Button, Input } from 'react-native-elements'
import { size } from 'lodash'
import {useNavigation} from '@react-navigation/native'
import Loading from '../Loading'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { validateEmail } from '../../Utilies/helpers'
import { registerUser } from '../../Utilies/actions'


export default function RegisterUserForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [errorName, setErrorName] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    const doregisterUser = async ()=>{
        if (!validateData()){
            return
        }

        setLoading(true)
        const result = await registerUser(formData.email, formData.password, formData.name)
        setLoading(false)
        if(!result.statusResponse){
            setErrorEmail(result.error)
            return
        }

        navigation.navigate("account")
    }

    const validateData = ()=>{
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if (!validateEmail(formData.email)){
            setErrorEmail("Debes ingresar un email válido")
            isValid = false
        }
        if (size(formData.password) < 6){
            setErrorPassword("Debes ingresar una contraseña de almenos 6 carateres")
            isValid = false
        }
        if (size(formData.confirm) < 6){
            setErrorConfirm("Debes ingresar una confirmación de contraseña almenos 6 carateres")
            isValid = false
        }
        if (formData.password !== formData.confirm){
            setErrorPassword("La contraseña y la confirmación no coinciden")
            setErrorConfirm("La contraseña y la confirmación no coinciden")
            isValid = false
        }
        /*if (formData.name(null)){
            setErrorName("Debes ingresar tu nombre completo")
            isValid = false
        }*/
        return isValid
    }

    return (     
        <KeyboardAwareScrollView>
        <Image
            source={require("../../assets/Usuario.png")}
            resizeMode="contain"
            style={styles.image}
        />            
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email..."
                onChange={(e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
            /*    containerStyle={styles.input}
                placeholder="Ingresa tu nombre completo..."
                onChange={(e) => onChange(e, "name")}
                errorMessage={errorName}
              */  defaultValue={formData.name}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu contraseña..."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={()=> setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu contraseña..."
                onChange={(e) => onChange(e, "confirm")}
                password={true}
                secureTextEntry={!showPassword}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={()=> setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={()=> doregisterUser()}
            />
            <Loading
                isVisible={loading}
                text="Registrando Usuario"
            />
        </View>
    </KeyboardAwareScrollView>
    )
}
const defaultFormValues = () =>{
    return {email: "", password:"", confirm:"", name:""}
}

const styles = StyleSheet.create({
    form:{
        marginTop:30
    },
    input:{
        width:"100%"
    },
    btnContainer:{
        marginTop:20,
        width:"95%",
        alignSelf: "center"
    },
    btn:{
        backgroundColor:"#eca334"
    },
    icon:{
        color:"#c1c1c1"
    },
    image:{
        height: 150,
        width: "100%",
        marginBottom: 20
    }
})
