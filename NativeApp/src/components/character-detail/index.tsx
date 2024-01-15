import React from 'react';
import {Image, Text, View} from 'react-native';
import Card, {DetailRow} from "../card";
import {Character} from "../../types/character-type";
import {detailCardStyle} from "./style";

interface CharacterDetailProps {
    character: Character
}





const CharacterDetailCard: React.FC<CharacterDetailProps> = ({character}) => {
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


export default CharacterDetailCard;

