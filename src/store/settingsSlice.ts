import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
    hasWaves: boolean,
    hasPools: boolean,
    isDoubles: boolean,
}

const initialState: SettingsState = {
    hasWaves: false,
    hasPools: false,
    isDoubles: false,
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleWaves: state => {
            state.hasWaves = !state.hasWaves;
        },
        togglePools: state => {
            state.hasPools = !state.hasPools;
        },
        toggleDoubles: state => {
            state.isDoubles = !state.isDoubles;
        },
    }
});

export const settingsActions = settingsSlice.actions;

export default settingsSlice;