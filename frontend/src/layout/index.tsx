import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface WithAppBarProps {
    isAppBarOpen: boolean;
    toggleAppBar: () => void;
}

// Die HOC-Funktion, die die AppBar implementiert
const withAppBar = <P extends WithAppBarProps>(
    WrappedComponent: React.ReactNode,
) => {
    return class WithAppBar extends Component<P, { isAppBarOpen: boolean }> {
        constructor(props: P) {
            super(props);
            this.state = {
                isAppBarOpen: false,
            };
        }

        // Funktion, um das Burger-Menu zu öffnen/schließen
        toggleAppBar = () => {
            this.setState((prevState) => ({
                isAppBarOpen: !prevState.isAppBarOpen,
            }));
        };

        render() {
            const {isAppBarOpen} = this.state;

            return (
                <View style={{flex: 1}}>
                    {/* AppBar-Komponente */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                        <TouchableOpacity onPress={this.toggleAppBar}>
                            <Text>Burger Menu</Text>
                        </TouchableOpacity>
                        <Text>App Title</Text>
                    </View>

                    {/* WrappedComponent mit zusätzlichem Prop für den AppBar-Status */}
                    <WrappedComponent
                        {...this.props}
                        isAppBarOpen={isAppBarOpen}
                        toggleAppBar={this.toggleAppBar}
                    />

                    {/* Hier kannst du weitere Inhalte deiner App platzieren */}
                </View>
            );
        }
    };
};

export function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

export function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


export default withAppBar
