import type { RootState } from ".";
import { CaseReducer, createSlice, PayloadAction, StateFromReducersMapObject } from "@reduxjs/toolkit";
import PlayerData from "../Models/playerData";


const DUMMY_DATA = [new PlayerData(1), new PlayerData(2)]

interface EditPlayersState {
    playerList: PlayerData[],
}

const initialState: EditPlayersState = {
    playerList: DUMMY_DATA,
}

export const editPlayersSlice = createSlice({
    name: "editPlayers",
    initialState,
    reducers: {
        addPlayer: (state, { payload }: PayloadAction<PlayerData>) => {
            state.playerList = state.playerList.concat([payload]);
        },
        removePlayer: (state, { payload }: PayloadAction<string>) => {
            state.playerList = state.playerList.filter(player => {
                return player.id !== payload;
            });
        },
    }
});

export default editPlayersSlice.reducer;