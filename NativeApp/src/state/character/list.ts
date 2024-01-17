import {asyncThunkCreator, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../../types/character-type";
import {fetchData} from "../../api/axios";


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
        },
        next: null,
        episodes: [],
    } as CharacterListState,
    reducers: {
        setCharacters(state, action) {
            state.characters = action.payload;
        },
        setCharacterFilter(state, action: PayloadAction<{ name: string }>) {
            state.characters = [];
            state.characterFilter.name = action.payload.name;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = [...state.characters, ...action.payload.results];
            state.next = action.payload.info.next;
        });
    }
});

export const getCharacters = createAsyncThunk("characterList/getCharacters", async (filter: any, {getState}) => {
    const {characterList} = getState();
    return characterList.next ? await fetchData(characterList.next, characterList.characterFilter) : await fetchData('https://rickandmortyapi.com/api/character/', characterList.characterFilter);
});


export default characterListSlice;