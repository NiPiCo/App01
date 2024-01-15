import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Card from "../../card";
import {Character} from "../../../types/character-type";
import {EpisodeType} from "../../../types/episode-type";

interface ListProps<T> {
    list: Array<T>;
}


interface EpisodeItemProp {
    episode: EpisodeType,
}

const EpisodeItem: React.FC<EpisodeItemProp> = ({episode}) => {
    return (<View>
        <Card>
            <Text>{episode.name}</Text>
            <Text>{episode.episode}</Text>
        </Card>
    </View>)
};
export default EpisodeItem;

