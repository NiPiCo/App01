import React, {useEffect, useState} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../../layout/style";
import DetailCard from "../../../components/detail-card";
import {useRoute} from "@react-navigation/native";
import EpisodeItem from "../../../components/list/episode";
import {fetchData} from "../../../api/axios";


export const EpisodeDetail: React.FC = ({}) => {

        const route = useRoute();
        const {episode} = route.params
       



        return (
            <TouchableOpacity >
            <View style={globalStyles.page}>
                <Text style={globalStyles.subHeader}>{episode.name}</Text>
                <Text style={globalStyles.subHeader}>{episode.episode}</Text>  
                <Text style={globalStyles.subHeader}>{episode.air_date}</Text>        
            </View>
            </TouchableOpacity>
        );
    }
;;