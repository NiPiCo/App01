import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TextInput, View} from 'react-native';
import Card from "../card";
import {globalStyles} from "../../layout/style";
import {randomCardStyle} from "./style";


interface DetailCardProps {
    detailImage: { uri: string };
    name: string;
    location: string;
}

const RandomCard: React.FC<DetailCardProps> = ({detailImage, location, name}) => {
    return (
        <Card>
            <img style={randomCardStyle.img} src={detailImage?.uri ?? ''}/>
            <Text style={randomCardStyle.text}>Welcher Character ist zu sehen?</Text>
            <View style={randomCardStyle.inputContainer}>
                <TextInput placeholder={'Name'} placeholderTextColor={'rgba(0, 0, 0, 0.5'} style={{
                    ...globalStyles.inputs,
                    ...randomCardStyle.input
                }} />
                <Button  title={'Bestätigen'} color={'#97CE4C'}/>
            </View>
        </Card>
    );
};

export default RandomCard;

