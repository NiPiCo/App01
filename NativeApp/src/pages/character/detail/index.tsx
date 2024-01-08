import React, {useEffect, useState} from "react";
import {Button, View} from "react-native";
import {globalStyles} from "../../../layout/style";
import DetailCard from "../../../components/detail-card";
import {useRoute} from "@react-navigation/native";


export const CharacterDetail: React.FC = ({}) => {
    const route = useRoute();
    const { character } = route.params
        return (
            <View style={globalStyles.page}>
               <DetailCard  character={character}/>
            </View>
        );
    }
;