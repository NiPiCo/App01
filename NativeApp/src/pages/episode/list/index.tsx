import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Card, {DetailRow} from "../../../components/card";
import {detailCardStyle} from "../../../components/character-detail/style";
import {EpisodeType} from "../../../types/episode-type";
import {fetchAllCharacters, fetchAllEpisodes} from "../../../api/axios";

import {globalStyles} from "../../../layout/style";
import EpisodeItem from "../../../components/list/episode";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../state/store";
import {getCharacters} from "../../../state/character/list";
import {getEpisodes} from "../../../state/episode/list";


interface EpisodeDetailProps {
    episode: EpisodeType,
}

interface EpisodeDetailListProps {
    navigation: any;
}

const EpisodeDetailCard: React.FC<EpisodeDetailProps> = ({episode}) => {
    return (
        <Card>
            <img src={'../../../assets/rick-morty-portal-i40514.jpg'} style={detailCardStyle.image}/>
            <View style={detailCardStyle.textContainer}>
                <DetailRow label={'Name:'} value={episode.name}/>
            </View>
        </Card>
    );
};


const EpisodeList: React.FC<EpisodeDetailListProps> = ({navigation}) => {

        const dispatch = useDispatch<AppDispatch>();
        const state = useSelector((state: RootState) => state.episodeList);

        useEffect(() => {
            console.log('ABC')
            dispatch(getEpisodes({}));
        }, []);


        return (
            <View style={globalStyles.page}>
                {state.episodes?.map((episode) => {
                    return <TouchableOpacity
                        key={episode.id}
                        onPress={() => {
                            console.log('ABC');
                            navigation.navigate('Detail', {episode: episode});
                        }}>
                        <EpisodeItem episode={episode}/>
                    </TouchableOpacity>;
                })}
                {
                    !!state.next && <Button title={'Mehr anzeigen'} onPress={() => dispatch(getEpisodes({}))}/>
                }
            </View>
        );
    }
;
export default EpisodeList;

