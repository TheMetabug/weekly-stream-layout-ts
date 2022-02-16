import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const waveNames: string[] = [
    "None",
    "Wave A",
    "Wave B",
    "Wave C",
    "Wave E",
    "Wave F",
    "Wave G",
];

const roundNames: string[] = [
    "Friendlies",
    "Grand Final",
    "Semi Finals",
    "Quarter Finals",
    "Round 1",
    "Round 2",
    "Round 3",
    "Round 4",
    "Round 5",
];

interface EditMatchState {
    waveNames: string[],
    roundNames: string[],
    currentPool: number,
    currentBestOf: number,
    currentWave: string,
    currentRound: string,
}

const initialState: EditMatchState = {
    waveNames: waveNames,
    roundNames: roundNames,
    currentPool: 0,
    currentBestOf: 3,
    currentWave: "None",
    currentRound: "None",
};

export const editMatchSlice = createSlice({
    name: "editMatch",
    initialState,
    reducers: {
        fetchData: (state) => {
            const overlayData = localStorage.getItem("overlayData");

            // Split and parse stringified data from JSON
            if (overlayData != null) {
                const parsedData = JSON.parse(overlayData);
                const matchData = parsedData.matchData;
                state.currentBestOf = matchData.currentBestOf;
                state.currentRound = matchData.currentRound;
            }
        },
        setData: (state, { payload }: PayloadAction<any>) => {
            state.currentPool = parseInt(payload.currentPool);
            state.currentBestOf = parseInt(payload.currentBestOf);
            state.currentWave = payload.currentWave;
            state.currentRound = payload.currentRound;
        },
        increasePool: (state) => {
            if (state.currentPool < 20) {
                state.currentPool++;
            }
        },
        decreasePool: (state) => {
            if (state.currentPool > 0) {
                state.currentPool--;
            }
        },
        increaseBestOf: (state) => {
            if (state.currentBestOf === 1) {
                state.currentBestOf = 3;
            } else if (state.currentBestOf === 3) {
                state.currentBestOf = 5;          
            }
        },
        decreaseBestOf: (state) => {
            if (state.currentBestOf === 3) {
                state.currentBestOf = 1;
            } else if (state.currentBestOf === 5) {
                state.currentBestOf = 3;
            }
        },
        changeWave: (state, { payload }: PayloadAction<string>) => {
            state.currentWave = payload;
        },
        changeRound: (state, { payload }: PayloadAction<string>) => {
            state.currentRound = payload;
        },
    }
});

export const editMatchActions = editMatchSlice.actions;

export default editMatchSlice.reducer;