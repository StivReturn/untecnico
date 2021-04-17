import React from 'react'
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    return (
        <ScrollView>
        <Image
            source={require("../../assets/UnTecnico.png")}
            resizeMode="contain"
            style={styles.image}
        />
        <View style={styles.container}>
            <CreateAccount/>
        </View>
        <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount(props){
    const navigation = useNavigation()
   
    return(
        <Text 
            style= {styles.register}
            onPress={()=> navigation.navigate("usertype")}
        >
            ¿Aún no tienes una cuenta registrada?{" "}
            <Text style={styles.btnRegister}>
                Regístrate!
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({

image:{
    height: 150,
    width: "100%",
    marginBottom: 30
},
container:{
    marginHorizontal:40
},
divider:{
    backgroundColor: "#eca334",
    margin: 40
},
register:{
    marginTop: 15,
    marginHorizontal: 10,
    fontSize:15,
    textAlign:"center",
},
btnRegister:{
    color:"#eca334",
    fontWeight: "bold",
    fontSize: 30
}

}) 
