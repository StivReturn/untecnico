import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function Loading({ isVisible, text}) {
    return (
        <Overlay>
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
            
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay : {
        height: 100,
        weight: 200,
        backgroundColor: "#fff",
        borderColor:"#b46a1f",
        borderWidth: 2,
        borderRadius: 10
    }
})
