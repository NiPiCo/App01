import React, {useEffect, useState} from "react";
import {CharacterDetail} from "./detail";
import CharacterList from "./list";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const NavTheme = {
    ...DefaultTheme,
    colors: {
        primary: 'rgb(68,248,12)',
        backgroundColor: '#fff'
    },
};

const Character: React.FC = () => {
    return (
        <NavigationContainer  independent={true} theme={NavTheme}>
            <Stack.Navigator

                initialRouteName="Home"
                screenOptions={{
                    orientation: "all",

                    contentStyle: {
                        height: 1000,
                        backfaceVisibility: 'hidden'
                    },
                    sceneContainerStyle: {
                        background: 'none'
                    },

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
        </NavigationContainer>
    );
};

export default Character;