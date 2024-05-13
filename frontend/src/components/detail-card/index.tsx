import React from 'react';
import {Image, Text, View} from 'react-native';
import Card from "../card";
import {Character} from "../../types/character-type";
import {detailCardStyle} from "./style";

interface DetailCardProps {
    character: Character
}

interface DetailRowProps {
    label: string,
    value: string
}

const DetailRow: React.FC<DetailRowProps> = ({label, value}) => {
    return (
        <View style={detailCardStyle.textRow}>
            <Text>{label}</Text>
            <Text> {value}</Text>
        </View>
    )
}

const DetailCard: React.FC<DetailCardProps> = ({character}) => {
    return (
        <Card>
            <img src={character.image} style={detailCardStyle.image}/>
            <View style={detailCardStyle.textContainer}>
                <DetailRow label={'Name:'} value={character.name}/>
                <DetailRow label={'Herkunft:'} value={character.origin.name}/>
                <DetailRow label={'Status:'} value={character.status}/>
                <DetailRow label={'Spezies:'} value={character.species}/>
                <DetailRow label={'Geschlecht:'} value={character.gender}/>
            </View>
        </Card>
    );
};


export default DetailCard;

