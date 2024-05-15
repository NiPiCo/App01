import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../../layout/style";
import DetailCard from "../../../components/detail-card";
import { useRoute } from "@react-navigation/native";
import EpisodeItem from "../../../components/list/episode";
import { fetchData } from "../../../api/axios";


export const CharacterDetail: React.FC = ({ }) => {

    const route = useRoute();
    const { character } = route.params
    const [episodes, setEpidodes] = useState([])


    useEffect(() => {
        if (character?.id) {
            const fetchedEpisodes = async () => await fetchData(`http://localhost:8000/api/characters/episodes/${character?.id}`).then(res => setEpidodes(res))
            fetchedEpisodes();

        }

    }, [])

    return (
        <TouchableOpacity >
            <View style={globalStyles.page}>
                <DetailCard character={character} />
                <Text style={globalStyles.subHeader}>Folgen mit {character.name}</Text>
                {episodes && episodes?.map((item, index) => {
                    return <EpisodeItem key={index} episode={item} img="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" />
                })}
            </View>
        </TouchableOpacity>
    );
}
    ;