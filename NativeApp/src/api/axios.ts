import axios from 'axios';
import {CharacterFilter} from "../types/filter-types";

const axiosCharacterInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
    timeout: 5000,
});
const axiosEpisodeInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/episode/',
    timeout: 5000,
});

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Fehler bei Anfrage an ${url}: ${error.message}`);
        throw error;
    }
};

export const fetchCharacter = async (charId: number) => {
    try {
        const response = await axiosCharacterInstance.get(`/${charId}`);
        return response.data;
    } catch (error) {
        return []
    }
};

export const fetchAllCharacters = async (filter: CharacterFilter) => {
    try {
        const response = await axiosCharacterInstance.get('', {
            params: filter
        });
        return response.data;
    } catch (error) {
    }
};

export const fetchAllEpisodes = async () => {
    try {
        const response = await axiosEpisodeInstance.get('');
        return response.data;
    } catch (error) {
    }
};