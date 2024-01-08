import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/pages/home/home";
import CharacterList from "./src/pages/character/list";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {CharacterDetail} from "./src/pages/character/detail";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Character from "./src/pages/character";

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const NavTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(68,248,12)',
        backgroundColor: '#fff'
    },
};
export default function App() {
    return (
        <NavigationContainer theme={NavTheme}>
            <Drawer.Navigator screenOptions={{
                sceneContainerStyle:{
                    background: 'none'
                },
            }} initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Characters" component={Character} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}