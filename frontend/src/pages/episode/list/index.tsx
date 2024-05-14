import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import {fetchAllCharacters, fetchAllEpisodes, fetchCharacter} from "../../../api/axios";
import withAppBar, {WithAppBarProps} from "../../../layout";
import {globalStyles} from "../../../layout/style";
import axios from "axios";
import ListItem from "../../../components/list/character";
import {Character} from "../../../types/character-type";
import FilterCharacterComponent from "../../../components/filter/filter-character-component";
import _ from "lodash";
import {CharacterFilter} from "../../../types/filter-types";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { EpisodeType } from '../../../types/episode-type';
import EpisodeItem from '../../../components/list/episode';

const Stack = createNativeStackNavigator();

interface ListProps extends WithAppBarProps {
    navigation: any
}


const EpisodeList: React.FC<ListProps> = ({navigation}) => {

        const [episodes, setEpisodes] = useState<Array<EpisodeType>>([]);
        const [data, setData] = useState<null |any>(null)
        const [hasNextPage, setHasNextPage] = useState(false)
        const [filter, setFilter] = useState<CharacterFilter>({name: ''})
        const onFilterChanged = _.debounce((charName) => {
            setFilter({name: charName});
        }, 500);

        useEffect(() => {
            console.log(filter)
        }, [filter])

        useEffect(() => {
            const userId = 1;
            const fetchData = async (filter: CharacterFilter) => {
                try {
                    const data = await fetchAllEpisodes();
                    console.log(data);
                    setEpisodes(data.results);
                    setData(data)
                    data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                    console.log('ARRAY')
                } catch (error) {
                    setEpisodes([])
                    setHasNextPage(false)
                }
            };
            fetchData(filter);
        }, [filter]);

        const showMore = () => {
            let fetchData = async () => {
                let axiosInstance = axios.create({
                    baseURL: data?.info.next,
                    timeout: 5000,
                });
                try {
                    const response = await axiosInstance.get('');
                    setEpisodes([...episodes, ...response?.data.results]);
                    setData(response?.data);
                    response?.data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                } catch (error) {
                    setEpisodes([])
                    setHasNextPage(false)
                }
            };
            fetchData()
        }
        return (

            <View style={globalStyles.page}>
                <FilterCharacterComponent onFilterChanged={onFilterChanged}/>
                {episodes?.map((listItem) => {
                    return <TouchableOpacity key={listItem.id}
                                             onPress={() => navigation.navigate('Detail', {episode: listItem})}>
                        <EpisodeItem episode={listItem} img={'https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b'}/>
                    </TouchableOpacity>
                })}
                {
                    !!hasNextPage && <Button title={'Mehr anzeigen'} onPress={() => showMore()}/>
                }
            </View>

        );
    }
;

export default EpisodeList
