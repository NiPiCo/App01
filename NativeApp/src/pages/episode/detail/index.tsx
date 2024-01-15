import React, {useEffect, useState} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../../layout/style";
import CharacterDetailCard from "../../../components/character-detail";
import {useRoute} from "@react-navigation/native";
import EpisodeItem from "../../../components/list/episode";
import {fetchData} from "../../../api/axios";
import {EpisodeType} from "../../../types/episode-type";
import Card, {DetailRow} from "../../../components/card";
import {detailCardStyle} from "../../../components/character-detail/style";
import {Character} from "../../../types/character-type";

interface EpisodeDetailCardProps{
    episode: EpisodeType
}
const EpisodeDetailCard: React.FC<EpisodeDetailCardProps> = ({ episode }) => {
    return (<Card>
        <img src={"https://www.minitopia.com.au/cdn/shop/collections/rick_morty_600x600_crop_center.jpg?v=1646548755"} style={detailCardStyle.image}/>
        <View style={detailCardStyle.textContainer}>
            <DetailRow label={'Name:'} value={episode.name}/>
        </View>
    </Card>)
}
const EpisodeDetail: React.FC = () => {

        const route = useRoute();
        const {episode} = route.params
        const [characters, setCharacters] = useState<Character[]>([])

        useEffect(() => {
            Promise.all(episode.characters.map(url => fetchData(url)))
                .then((results) => {
                    setCharacters(results)
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
                    <EpisodeDetailCard episode={episode}/>
                </View>
            </TouchableOpacity>
        );
    };

export default EpisodeDetail