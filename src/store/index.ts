import { configureStore } from "@reduxjs/toolkit";
import editMatchSlice from "./editMatchSlice";
import editPlayersSlice from "./editPlayersSlice";
import overlayDataSlice from "./overlayDataSlice";
import settingsSlice from "./settingsSlice";

export const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        editPlayerData: editPlayersSlice,
        editMatchData: editMatchSlice,
        overlayData: overlayDataSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;