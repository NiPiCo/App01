import React from 'react';
import {View} from 'react-native';
import {style} from "./style";

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return (
        <View style={style.container}>
            {children}
        </View>
    );
};

export default Card;

