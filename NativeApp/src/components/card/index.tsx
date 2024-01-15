import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {style} from "./style";
import {detailCardStyle} from "../character-detail/style";
import {fetchData} from "../../api/axios";

interface CardProps {
    children: React.ReactNode;
}
interface DetailRowProps {
    label: string,
    value: string
}
export const DetailRow: React.FC<DetailRowProps> = ({label, value}) => {
    return (
        <View style={detailCardStyle.textRow}>
            <Text>{label}</Text>
            <Text> {value}</Text>
        </View>
    )
}
const Card: React.FC<CardProps> = ({children}) => {
    return (
        <View style={style.container}>
            {children}
        </View>
    );
};

export default Card;

