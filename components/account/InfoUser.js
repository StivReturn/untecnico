import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Alert, Avatar } from 'react-native-elements'
import { updateProfile, uploadImage } from '../../Utilies/actions'

import { loadImageFromGallery } from '../../Utilies/helpers'

export default function InfoUser({user, setLoading, setLoadingText}) {    
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)
    
    const changePhoto = async () =>{        
        const result = await loadImageFromGallery([1,1])
        if (!result.status){
            return
        }
        setLoadingText("Actualizando imagen...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image, "avatars", user.uid)
        if (!resultUploadImage.statusResponse){
            setLoading(false)
            Alert.alert("Error al almacenar la foto de perfil")
            return
        }
        const resultUpdateProfile =await updateProfile({photoURL: resultUploadImage.url})
        setLoading(false)
        if(resultUpdateProfile.statusResponse){
            setPhotoUrl(resultUploadImage.url)
        } else {
            Alert.alert("Error al actualizar la foto de perfil")            
        }
    }
    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                containerStyle={styles.avatar}
                source={
                    photoUrl
                    ? {uri: photoUrl}
                    : require("../../assets/avatar.png")
            }
        />
        <View style={styles.infoUser}>
            <Text style={styles.displayName}> 
                {
                    user.displayName ? user.displayName
                    : "Anónimo"
                }
            </Text>
            <Text>
                {user.email}
            </Text>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor:"#f9f9f9",
        paddingVertical: 30
    },
    infoUser:{
        marginLeft:20
    },
    displayName:{
        fontWeight:"bold",
        paddingBottom:5
    }
})
