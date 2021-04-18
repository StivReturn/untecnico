import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { map } from 'lodash'
import { ListItem, Icon } from 'react-native-elements'

import Modal from '../Modal'
import ChangeDisplayNameForm from './ChangeDisplayNameForm'

export default function AccountOptions({user, toastRef, setReloadUser}) {
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
       
    const generateOption = () => {
        return [
            {
                title: "Cambiar nombre", 
                iconNameLeft:"account-circle",
                iconColorLeft:"#b46a1f",
                iconNameRight:"chevron-right",
                iconColorRight:"#b46a1f",
                onPress: () => selectedComponent("displayName")
            },
            {
                title: "Cambiar email", 
                iconNameLeft:"at",
                iconColorLeft:"#b46a1f",
                iconNameRight:"chevron-right",
                iconColorRight:"#b46a1f",
                onPress: () => selectedComponent("email")
            },
            {
                title: "Cambiar contraseña", 
                iconNameLeft:"lock-reset",
                iconColorLeft:"#b46a1f",
                iconNameRight:"chevron-right",
                iconColorRight:"#b46a1f",
                onPress: () => selectedComponent("password")
            }
        ]    
    }
    const selectedComponent = (key) =>{   
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeDisplayNameForm 
                    displayName={user.displayName}
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                    setReloadUser={setReloadUser}
                    />
                )
                break;
            case "email":
                setRenderComponent(
                    <Text>email</Text>
                )
                break;
            case "password":
                setRenderComponent(
                    <Text>password</Text>
                )            
                break; 
        }
        setShowModal(true)
    }
    
    const menuOptions = generateOption()    

    return (
        <View>
            {
                map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menuItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type="material-community"
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                {menu.title}
                            </ListItem.Title>
                        </ListItem.Content>
                            <Icon
                                type="material-community"
                                name={menu.iconNameRight}
                                color={menu.iconColorRight}
                        />
                    </ListItem>
                ))
            }
            <Modal isVisible={showModal} setVisible={setShowModal}>
                {
                    renderComponent
                }
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItem:{
        borderBottomWidth:1,
        borderBottomColor:"#7c441b"
    }
})
