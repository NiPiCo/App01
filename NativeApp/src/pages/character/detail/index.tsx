import React, {useEffect, useState} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../../layout/style";
import CharacterDetailCard from "../../../components/character-detail";
import {useRoute} from "@react-navigation/native";
import EpisodeItem from "../../../components/list/episode";
import {fetchData} from "../../../api/axios";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../state/store";
import {getEpisodes} from "../../../state/character/detail";


export const CharacterDetail: React.FC = ({}) => {

        const state = useSelector((state: RootState) => state.characterDetail);
        const dispatch = useDispatch<AppDispatch>();

        useEffect(() => {
            let loadEpisodes = async () => {
                let episodes = await dispatch(getEpisodes(state.character.episode));
                dispatch({type: 'characterDetail/setEpisodes', payload: episodes.payload});
                console.log(state)
                return episodes.payload;
            };
            loadEpisodes();
        }, []);

        return (
            <TouchableOpacity>
                <View style={globalStyles.page}>
                    <CharacterDetailCard character={state.character}/>
                    <Text style={globalStyles.subHeader}>Folgen mit {state.character.name}</Text>
                    {state.episodes && state.episodes.map((item, index) => {
                        return <EpisodeItem key={index} episode={item} />;
                    })}
                </View>
            </TouchableOpacity>
        );
    }
;