import {asyncThunkCreator, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../../types/character-type";
import {fetchData} from "../../api/axios";
import axios from "axios";

interface CharacterListState {
    characters: Character[],
    characterFilter: {
        name: string
    },
    next: string | null,
}

const characterListSlice = createSlice({
    name: 'characterList',
    initialState: {
        characters: [],
        characterFilter: {
            name: ""
        }
    } as CharacterListState,
    reducers: {
        setCharacters(state, action) {
            state.characters = action.payload;
        },
        setCharacterFilter(state, action) {
            state.characterFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.results;
        });
    }
});

export const getCharacters = createAsyncThunk("characterList/getCharacters", async (filter: any) => {
    return await fetchData('https://rickandmortyapi.com/api/character/');
});



export default characterListSlice;