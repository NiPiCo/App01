import {configureStore} from "@reduxjs/toolkit";
import characterListSlice from "./character/list";
export const store = configureStore({
    reducer: { characterList: characterListSlice.reducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>




