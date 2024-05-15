import axios from 'axios';
import {CharacterFilter} from "../types/filter-types";
import Config from 'react-native-config';

const axiosInstance = axios.create({
    baseURL:  'http://localhost:8000/api/',
    timeout: 5000,
});

export const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error : any) {
        console.error(`Fehler bei Anfrage an ${url}: ${error?.message}`);
        throw error;
    }
};

export const fetchCharacter = async (charId: number) => {
    try {
        const response = await axiosInstance.get(`characters/${charId}`);
        return response.data;
    } catch (error) {

    }
};
export const fetchCharacterEpisodes = async (charId: number) => {
    try {
        const response = await axiosInstance.get(`characters/episodes/${charId}`);
        return response.data;
    } catch (error) {
    }
};
export const fetchAllCharacters = async (filter: CharacterFilter) => {
    try {
        const response = await axiosInstance.get('characters', {
            params: filter
        });
        return response.data;
    } catch (error) {
    }
};

export const fetchAllEpisodes = async () => {
    try {
        const response = await axiosInstance.get('episodes');
        return response.data;
    } catch (error) {
    }
};