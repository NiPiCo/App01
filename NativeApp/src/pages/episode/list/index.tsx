import React, {useEffect, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import Card, {DetailRow} from "../../../components/card";
import {detailCardStyle} from "../../../components/character-detail/style";
import {EpisodeType} from "../../../types/episode-type";
import {fetchAllCharacters, fetchAllEpisodes} from "../../../api/axios";

import {globalStyles} from "../../../layout/style";
import EpisodeItem from "../../../components/list/episode";
import axios from "axios";


interface EpisodeDetailProps {
    episode: EpisodeType,
}

interface EpisodeDetailListProps {
    navigation: any
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

        const [episodes, setEpisodes] = useState<null | Array<EpisodeType>>(null);
        const [data, setData] = useState(null)
        const [hasNextPage, setHasNextPage] = useState(false)
        useEffect(() => {

            const fetchData = async () => {
                try {
                    const data = await fetchAllEpisodes();
                    console.log(data)
                    setEpisodes(data.results);
                    setData(data)
                    data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                    console.log('ARRAY')
                } catch (error) {
                    setEpisodes([])
                    console.log('ERROR')
                    setHasNextPage(false)
                }
            };
            fetchData();
        }, []);

        const showMore = () => {
            let fetchData = async () => {
                let axiosInstance = axios.create({
                    baseURL: data.info.next,
                    timeout: 5000,
                });
                try {
                    const response = await axios.get('');
                    setEpisodes([...episodes, ...response?.data.results]);
                    setData(response?.data);
                    response?.data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                } catch (error) {
                    setEpisodes([])
                    console.log('RRRRR')
                    setHasNextPage(false)
                }
            };
            fetchData()
        }

        return (
            <View style={globalStyles.page}>
                {episodes?.map((episode) => {
                    return <TouchableOpacity
                        key={episode.id}
                        onPress={() => {
                            console.log('ABC')
                            navigation.navigate('Detail', {episode: episode})
                        }}>
                        <EpisodeItem episode={episode} />
                    </TouchableOpacity>
                })}
                {
                    !!hasNextPage && <Button title={'Mehr anzeigen'} onPress={() => showMore()}/>
                }
            </View>
        );
    }
;
export default EpisodeList;

