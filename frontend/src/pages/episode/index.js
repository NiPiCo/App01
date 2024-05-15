import React, {useEffect, useState} from "react";
import {Button, View} from "react-native";
import {globalStyles} from "../../layout/style";
import {CharacterDetail} from "./detail";
import CharacterList from "./list";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodeList from "./list";
import { EpisodeDetail } from "./detail";

const Stack = createNativeStackNavigator();
const NavTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(68,248,12)',
        backgroundColor: '#fff'
    },
};

const Episodes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Episodes"
        screenOptions={{
            contentStyle: {
                backgroundColor:'#fff'
            }
        }}
        >
            <Stack.Screen
                name="List"
                component={EpisodeList}
                options={{title: 'Alle Episoden'}}
            />
            <Stack.Screen
                name="Detail"
                component={EpisodeDetail}
                options={({route}) => ({episode: route.params?.episode?.name})}
            />
        </Stack.Navigator>
    );
};

export default Episodes;