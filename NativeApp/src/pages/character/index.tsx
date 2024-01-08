import React, {useEffect, useState} from "react";
import {Button, View} from "react-native";
import {globalStyles} from "../../layout/style";
import {CharacterDetail} from "./detail";
import CharacterList from "./list";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const NavTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(68,248,12)',
        backgroundColor: '#fff'
    },
};

const Character: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        screenOptions={{
            contentStyle: {
                backgroundColor: '#fff'
            }
        }}
        >
            <Stack.Screen
                name="List"
                component={CharacterList}
                options={{title: 'Alle Charaktere'}}
            />
            <Stack.Screen
                name="Detail"
                component={CharacterDetail}
                options={({route}) => ({title: route.params.character.name})}
            />
        </Stack.Navigator>
    );
};

export default Character;