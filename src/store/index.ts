import { configureStore } from "@reduxjs/toolkit";
import editMatchSlice from "./editMatchSlice";
import editPlayersSlice from "./editPlayersSlice";
import settingsSlice from "./settingsSlice";

export const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        editPlayerData: editPlayersSlice,
        editMatchData: editMatchSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;