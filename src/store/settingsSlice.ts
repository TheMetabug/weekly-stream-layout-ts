import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

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

export const { toggleWaves, togglePools, toggleDoubles } = settingsSlice.actions;

export default settingsSlice;