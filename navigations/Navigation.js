import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'



//import Technical from '../screens/Technical'
//import TopTechnicals from '../screens/TopTechnicals'
import RequestsStack from './RequestsStack'
import ChatStack from './ChatStack'
import FavoritesStack from './FavoritesStack'
import AccountStack from './AccountStack'

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
                iconName="cards-heart"
                break;
            case "account":
                iconName="account-circle"
                break;
        }
        return(
            <Icon
                type="material-community"
                name={iconName}
                size={30}
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
                    name="requests"
                    component={RequestsStack}
                    options={{title: "Solicitar servicio"}}
                />
                <Tab.Screen
                    name="chat"
                    component={ChatStack}
                    options={{title: "Chat"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
