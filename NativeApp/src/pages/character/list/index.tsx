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
    navigation: any;
}


const CharacterList: React.FC<ListProps> = ({navigation}) => {

        const dispatch = useDispatch<AppDispatch>();
        const state = useSelector((state: RootState) => state.characterList);

        const onFilterChanged = _.debounce((charName) => {
            dispatch({type: 'setFilter', payload: {name: charName}});
        }, 500);

        useEffect(() => {
            dispatch(getCharacters({next: 'ABC', filter: 'ABC'}));

        }, []);

        return (

            <View style={globalStyles.page}>
                <FilterCharacterComponent onFilterChanged={onFilterChanged}/>
                {state.characters?.map((char) => {
                    return <TouchableOpacity
                        key={char.id}
                        onPress={() => navigation.navigate('Detail', {character: char})}>
                        <ListItem item={char}/>
                    </TouchableOpacity>;
                })}
                {
                    state.next &&
                    <Button title={'Mehr anzeigen'} onPress={() => dispatch(getCharacters({next: 'ABC', filter: 'ABC'}))}/>
                }
            </View>

        );
    }
;

export default CharacterList;
