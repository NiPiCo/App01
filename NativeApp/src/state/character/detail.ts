import {asyncThunkCreator, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchData} from "../../api/axios";
import {EpisodeType} from "../../types/episode-type";


interface CharacterDetailState {
    episodes: EpisodeType[],
}

const characterDetailSlice = createSlice({
    name: 'characterDetail',
    initialState: {
        episodes: [],
        character: null,
    } as CharacterDetailState,
    reducers: {
        setCharacter(state, action) {
            state.character = action.payload;
        },
        setEpisodes(state, action) {
            state.episodes = action.payload;
        }
    }
});

export const getEpisodes = createAsyncThunk("characterDetail/getEpisodes", async (episodes:EpisodeType[], { getState }) => {

    const { characterDetail } = getState();

    try {
        const results = await Promise.all(characterDetail.character.episode.map(url => fetchData(url))) as EpisodeType[] | any;
        console.log( results,'RESULTS')
        return results as EpisodeType[] | any;
    } catch (error) {
        // Fehler bei mindestens einer Anfrage
        console.error('Fehler bei mindestens einer Anfrage:', error);
        return []
    }

});



export default characterDetailSlice;