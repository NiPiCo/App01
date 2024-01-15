import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from "./src/pages/home/home";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Character from "./src/pages/character";
import Episodes from "./src/pages/episode";
import {Provider} from "react-redux";
import {store} from "./src/state/store";

function NotificationsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back home"/>
        </View>
    );
}

const Drawer = createDrawerNavigator();
const NavTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(68,248,12)',
        backgroundColor: '#fff',
    },
};
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer theme={NavTheme}>
                    <Drawer.Navigator screenOptions={{
                        sceneContainerStyle: {
                            background: 'none'
                        },
                    }} initialRouteName="Home">
                        <Drawer.Screen name="Home" component={Home}/>
                        <Drawer.Screen name="Characters" component={Character}/>
                        <Drawer.Screen name="Episodes" component={Episodes}/>
                    </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}