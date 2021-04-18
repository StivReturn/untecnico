import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

export default function UserType() {
    const navigation = useNavigation()
    let user = ""
    
    return (
        <KeyboardAwareScrollView>   
                <Image                
                    source={require("../../assets/Tecnico.png")}
                    resizeMode="contain"
                     style={styles.image}   
                                   
                />
                <Text style={styles.text}   
                onPress={()=> navigation.navigate("registertechnical")}  
                userType= "Technical"                
                >
                    Técnico
                </Text>                
                <Image
                source={require("../../assets/Usuario.png")}
                resizeMode="contain"
                style={styles.image}                
            />
            <Text style={styles.text}
                onPress={()=> navigation.navigate("registeruser")}
                userType= "User"  
            >
            Usuario
            </Text>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: "100%",
        marginBottom: 20,
        marginVertical: 20
        
    },
    text:{
        color:"#7c441b",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"   
    }
})
