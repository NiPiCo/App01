import React from 'react';
import {Image, Text, View} from 'react-native';
import Card from "../../card";
import {style} from "./style";
import {Character} from "../../../types/character-type";

interface ListProps<T> {
    list: Array<T>;
}



interface ListItemProps {
    item: Character,
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
    return (
        <View style={style.container}>
            <Text>{item.name}</Text>
            <img src={item.image} width={50} style={style.image}/>
        </View>
    );
};
export default ListItem;

