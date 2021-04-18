import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Icon} from 'react-native-elements'
import { isEmpty, size } from 'lodash'

import {reauthenticate, updatePassword} from '../../Utilies/actions'
import {validateEmail} from '../../Utilies/helpers'



export default function ChangePasswordForm({ setShowModal, toastRef}) {
    const [newPassword, setNewPassword] = useState(null)
    const [currentPassword, setCurrentPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [errorCurrentPassword, setErrorCurrentPassword] = useState(null)
    const [errorNewPassword, setErrorNewPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() =>{
        if (!validateForm()){
            return
        }
         setLoading(true)
         const resultReauthenticate = await reauthenticate(currentPassword)
         if(!resultReauthenticate.statusResponse){
            setLoading(false)       
            setErrorCurrentPassword("Contraseña incorrecta")
            return
        }
        const resultUpdatePassword = await updatePassword(newPassword)
        setLoading(false)

        if(!resultUpdatePassword.statusResponse){
        setErrorNewPassword("Error al cambiar contraseña, intente de nuevo")
        return
         }
         
         toastRef.current.show("Actualización completa", 3000)
         setShowModal(false)
}

const validateForm = () =>{
    setErrorNewPassword(null)
    setErrorCurrentPassword(null)
    setErrorConfirmPassword(null)
    let isValid = true

    if (isEmpty(currentPassword)){
        setErrorCurrentPassword("Debes ingresar tu contraseña")
        isValid = false
    }

    if (size(newPassword) < 6){
        setErrorNewPassword("Debes ingresar tu nueva contraseña de almenos 6 caracteres")
        isValid = false
    }

    if (size(confirmPassword) < 6){
        setErrorConfirmPassword("Debes ingresar tu nueva confirmación de contraseña de almenos 6 caracteres")
        isValid = false
  
    }
    if (newPassword !== confirmPassword){
        setErrorNewPassword("La contraseña y la confirmación de contraseña deben ser iguales")
        setErrorConfirmPassword("La contraseña y la confirmación de contraseña deben ser iguales")
        isValid = false
    }

    if (newPassword === currentPassword){
        setErrorCurrentPassword("La nueva contraseña debe ser diferente a la actual")
        setErrorNewPassword("La nueva contraseña debe ser diferente a la actual")
        setErrorConfirmPassword("La nueva contraseña debe ser diferente a la actual")
        isValid = false
    }

    return isValid
}

    return (
        <View style={styles.view}>            
            <Input
                placeholder="Ingresa tu contraseña actual"
                containerStyle={styles.input}
                defaultValue={currentPassword}
                onChange={ (e) => setCurrentPassword(e.nativeEvent.text)}
                errorMessage={errorCurrentPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                    type="material-community"
                    name= { showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={{ color:"#c2c2c2"}}
                    onPress= {() => setShowPassword(!showPassword)}
                    />                    
                }
            />
            <Input
                placeholder="Ingresa tu nueva contraseña"
                containerStyle={styles.input}
                defaultValue={newPassword}
                onChange={ (e) => setNewPassword(e.nativeEvent.text)}
                errorMessage={errorNewPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                    type="material-community"
                    name= { showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={{ color:"#c2c2c2"}}
                    onPress= {() => setShowPassword(!showPassword)}
                    />                    
                }
            />
            <Input
                placeholder="Ingresa tu confirmación de contraseña"
                containerStyle={styles.input}
                defaultValue={confirmPassword}
                onChange={ (e) => setConfirmPassword(e.nativeEvent.text)}
                errorMessage={errorConfirmPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                    type="material-community"
                    name= { showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={{ color:"#c2c2c2"}}
                    onPress= {() => setShowPassword(!showPassword)}
                    />                    
                }
            />
            <Button
                title="Cambiar contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems:"center",
        paddingVertical: 10
    },
    input:{
        marginBottom: 10
    },
    btnContainer:{
        width:"95%"
    },
    btn:{
        backgroundColor:"#b46a1f"
    }
})
