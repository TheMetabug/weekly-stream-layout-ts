import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditPlayersState {
    leftName: string,
    leftScore: string,
    rightName: string,
    rightScore: string,
    matchTitle: string,
    matchBestOf: string,
}

const initialState: EditPlayersState = {
    leftName: "Player 1",
    leftScore: "0",
    rightName: "Player 2",
    rightScore: "0",
    matchTitle: "Friendlies",
    matchBestOf: "3",
};

export const overlayDataSlice = createSlice({
    name: "editPlayers",
    initialState,
    reducers: {
        setPlayer1Name: (state, { payload }: PayloadAction<string>) => {
            state.leftName = payload;
        },
        setPlayer1Score: (state, { payload }: PayloadAction<string>) => {
            state.leftScore = payload;
        },
        setPlayer2Name: (state, { payload }: PayloadAction<string>) => {
            state.leftName = payload;
        },
        setPlayer2Score: (state, { payload }: PayloadAction<string>) => {
            state.leftScore = payload;
        },
        setMatchTitle: (state, { payload }: PayloadAction<string>) => {
            state.matchTitle = payload;
        },
        setMatchBestOf: (state, { payload }: PayloadAction<string>) => {
            state.matchBestOf = payload;
        },
    }
});

export const overlayDataActions = overlayDataSlice.actions;

export default overlayDataSlice.reducer;