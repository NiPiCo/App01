import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import {fetchAllCharacters, fetchCharacter} from "../../../api/axios";
import withAppBar, {WithAppBarProps} from "../../../layout";
import {globalStyles} from "../../../layout/style";
import axios from "axios";
import ListItem from "../../../components/list/character";
import {Character} from "../../../types/character-type";
import FilterCharacterComponent from "../../../components/filter/filter-character-component";
import _ from "lodash";
import {CharacterFilter} from "../../../types/filter-types";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../state/store";
import {getCharacters} from "../../../state/character/list";


interface ListProps extends WithAppBarProps {
    navigation: any
}


const CharacterList: React.FC<ListProps> = ({navigation}) => {

        const [chars, setCharsData] = useState<null | Array<Character>>(null);
        const [data, setData] = useState(null)
        const [hasNextPage, setHasNextPage] = useState(false)
        const [filter, setFilter] = useState<CharacterFilter>({name: ''})
        const dispatch = useDispatch<AppDispatch>()
        const state = useSelector((state: RootState) => state.characterList)
        const onFilterChanged = _.debounce((charName) => {
            /* setFilter({name: charName});*/
            dispatch({type: 'setFilter', payload: {name: charName}});
        }, 500);

        /*   useEffect(() => {
               const fetchData = async (filter: CharacterFilter) => {
                   try {
                       const data = await fetchAllCharacters(filter);
                       setCharsData(data.results);
                       setData(data)
                       data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                       console.log('ARRAY')
                   } catch (error) {
                       setCharsData([])
                       setHasNextPage(false)
                   }
               };
               fetchData(filter);
           }, [filter]);*/

        useEffect(() => {
            dispatch(getCharacters({next: 'ABC', filter: 'ABC'}))

        }, [])

        const showMore = () => {
            let fetchData = async () => {
                let axiosInstance = axios.create({
                    baseURL: data.info.next,
                    timeout: 5000,
                });
                try {
                    const response = await axiosInstance.get('');
                    setCharsData([...chars, ...response?.data.results]);
                    setData(response?.data);
                    response?.data.info?.next ? setHasNextPage(true) : setHasNextPage(false)
                } catch (error) {
                    setCharsData([])
                    setHasNextPage(false)
                }
            };
            fetchData()
        }
        return (

            <View style={globalStyles.page}>
                <FilterCharacterComponent onFilterChanged={onFilterChanged}/>
                {state.characters?.map((char) => {
                    return <TouchableOpacity
                        key={char.id}
                        onPress={() => navigation.navigate('Detail', {character: char})}>
                        <ListItem item={char}/>
                    </TouchableOpacity>
                })}
                {
                    !!hasNextPage && <Button title={'Mehr anzeigen'} onPress={() => showMore()}/>
                }
            </View>

        );
    }
;

export default CharacterList
