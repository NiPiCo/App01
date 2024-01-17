import {asyncThunkCreator, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchData} from "../../api/axios";
import {EpisodeType} from "../../types/episode-type";


interface EpisodeDetailState {
    episode: EpisodeType,
}

const episodeDetailSlice = createSlice({
    name: 'episodeDetail',
    initialState: {
        episode: null,
    } as EpisodeDetailState,
    reducers: {
        setEpisode(state, action) {
            state.episode = action.payload;
        }
    }
});

export default episodeDetailSlice;