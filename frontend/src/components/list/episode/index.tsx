import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Card from "../../card";
import {Character} from "../../../types/character-type";
import {EpisodeType} from "../../../types/episode-type";
import {style} from "./style";
interface ListProps<T> {
    list: Array<T>;
}


interface EpisodeItemProp {
    episode: EpisodeType,
    img: string
}

const EpisodeItem: React.FC<EpisodeItemProp> = ({episode, img}) => {
    return (
        <Card>
            <View style={style.wrapper1} >
            <Text>{episode.name}</Text>
            <View style={style.wrapper2}>
            <Text style={style.centerText}>{episode.episode}</Text> 
            <img src={img} width={50} style={style.image}/>
            </View>
            </View>
        </Card>
    )
};
export default EpisodeItem;

