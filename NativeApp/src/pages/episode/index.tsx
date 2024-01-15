import React, {useEffect, useState} from "react";
import {DefaultTheme, } from '@react-navigation/native';

import EpisodeList from "./list";
import EpisodeDetail from "./detail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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

            initialRouteName="Episode"
            screenOptions={{
                contentStyle: {
                    height: '100%'
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
                options={({route}) => ({title: route.params.episode.name})}
            />
        </Stack.Navigator>
    );
};
export default Episodes