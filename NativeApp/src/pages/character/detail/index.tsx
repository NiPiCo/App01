import React, {useEffect, useState} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../../layout/style";
import CharacterDetailCard from "../../../components/character-detail";
import {useRoute} from "@react-navigation/native";
import EpisodeItem from "../../../components/list/episode";
import {fetchData} from "../../../api/axios";


export const CharacterDetail: React.FC = ({}) => {

        const route = useRoute();
        const {character} = route.params
        const [episodes, setEpidodes] = useState([])

        useEffect(() => {
            Promise.all(character.episode.map(url => fetchData(url)))
                .then((results) => {
                    setEpidodes(results)
                    console.log('Alle Anfragen erfolgreich:', results);
                })
                .catch((error) => {
                    // Fehler bei mindestens einer Anfrage
                    console.error('Fehler bei mindestens einer Anfrage:', error);
                });
        }, [])

        return (
            <TouchableOpacity >
            <View style={globalStyles.page}>
                <CharacterDetailCard character={character}/>
                <Text style={globalStyles.subHeader}>Folgen mit {character.name}</Text>
                {episodes && episodes.map((item, index) => {
                    return <EpisodeItem key={index} episode={item}/>
                })}
            </View>
            </TouchableOpacity>
        );
    }
;