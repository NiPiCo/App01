import axios from 'axios';
import {CharacterFilter} from "../types/filter-types";

const axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
    timeout: 5000,
});

export const fetchCharacter = async (charId: number) => {
    try {
        const response = await axiosInstance.get(`/${charId}`);
        return response.data;
    } catch (error) {

    }
};

export const fetchAllCharacters = async (filter: CharacterFilter) => {
    try {
        const response = await axiosInstance.get('', {
            params: filter
        });
        return response.data;
    } catch (error) {

    }
};