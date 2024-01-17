import {asyncThunkCreator, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../../types/character-type";
import {fetchData} from "../../api/axios";
import {EpisodeType} from "../../types/episode-type";


interface EpisodeListState {
    episodes: EpisodeType[],
    next: string | null,
}

const episodeListSlice = createSlice({
    name: 'episodeList',
    initialState: {
        episodes: [],
        next: null
    } as EpisodeListState,
    reducers: {
        setEpisodes(state, action) {
            state.characters = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getEpisodes.fulfilled, (state, action) => {
            state.episodes = [...state.episodes, ...action.payload.results];
            state.next = action.payload.info.next;
        });
    }
});

export const getEpisodes = createAsyncThunk("episodeList/getEpisodes", async (filter: any, {getState}) => {
    console.log('ABC')
    console.log('ABCDD')
    const {episodeList} = getState();
    console.log(episodeList)
    return episodeList.next ? await fetchData(episodeList.next) : await fetchData('https://rickandmortyapi.com/api/episode/');
});


export default episodeListSlice;