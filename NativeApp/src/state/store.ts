import {configureStore} from "@reduxjs/toolkit";
import characterListSlice from "./character/list";
import characterDetailSlice from "./character/detail";
import episodeListSlice from "./episode/list";
export const store = configureStore({
    reducer: { characterList: characterListSlice.reducer , characterDetail: characterDetailSlice.reducer, episodeDetail: characterDetailSlice.reducer, episodeList: episodeListSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>




