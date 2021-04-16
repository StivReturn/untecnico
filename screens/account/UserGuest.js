import React from 'react'
import { StyleSheet, Text,  View, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation} from '@react-navigation/native'

export default function UserGuest() {
const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style= {styles.viewBody} 
        >
            <Image
                source={require("../../assets/UnTecnico.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil en Un Técnico</Text>
            
            <Text style={styles.description}> 
                ¿Tienes una urgencia y necesitas un profesional? o ¿Quieres ofrecer tus servicios? ¡Regístrate y hazlo! 
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Ver perfil"
                onPress={()=> navigation.navigate("login")}

            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image:{
        height: 400,
        width: "100%",
        marginVertical: 10,
        alignContent: "center" 
    },
    title: {
        color:"#7c441b",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"        
    },
    description:{
        color:"#926725",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 20,
        textAlign: "center"    
    },
    button:{
        backgroundColor:"#926725"
    }
  
})
