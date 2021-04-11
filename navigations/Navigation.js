import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'

//import Technical from '../screens/Technical'
import Favorites from '../screens/Favorites'
//import TopTechnicals from '../screens/TopTechnicals'
import Account from '../screens/Account'
import Chat from '../screens/Chat'
import Request from '../screens/Request'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case "requests":
                iconName="account-hard-hat"
                break;
            case "chat":
                iconName="chat"
                break;
            case "favorites":
                iconName="heart"
                break;
            case "account":
                iconName="account"
                break;
        }
        return(
            <Icon
                type="material-comunity"
                name={iconName}
                siza={22}
                color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="requests"
                tabBarOptions={{
                    inactiveTintColor:"#e79d30",
                    activeTintColor:"#eca334"
                
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="request"
                    component={Request}
                    options={{title: "Solicitar servicio"}}
                />
                <Tab.Screen
                    name="chat"
                    component={Chat}
                    options={{title: "Chat"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={Favorites}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
