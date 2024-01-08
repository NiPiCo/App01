import React, {useEffect, useState} from 'react';
import {View } from 'react-native';

import {fetchCharacter} from "../../api/axios";
import RandomCard from "../../components/random-card";
import withAppBar, {WithAppBarProps} from "../../layout";
import {globalStyles} from "../../layout/style";

interface HomeProps extends WithAppBarProps {

}

const Home: React.FC<HomeProps> = () => {

    const [char, setCharData] = useState(null);

    useEffect(() => {
        const userId = 1;
        const fetchData = async () => {
            try {
                const data = await fetchCharacter(userId);
                setCharData(data);
            } catch (error) {
                // Handle error
                console.error('Error fetching character data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={globalStyles.page} >
            <RandomCard name={'Test'} location={'Erde'} detailImage={{uri: char?.image}}/>
        </View>
    );
};

export default Home
