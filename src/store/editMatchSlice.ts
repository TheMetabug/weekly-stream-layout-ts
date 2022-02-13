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
    "Semi Final",
    "Quarter Final",
    "Round",
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
        getData: (state): any => {
            return {
                waveNames: state.waveNames.toString(),
                roundNames: state.roundNames.toString(),
                currentPool: state.currentPool.toString(),
                currentBestOf: state.currentBestOf.toString(),
                currentWave: state.currentWave.toString(),
                currentRound: state.currentRound.toString(),
            }
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