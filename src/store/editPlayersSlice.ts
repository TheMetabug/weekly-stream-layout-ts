import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PlayerData, { PlayerDataDefObj } from "../Models/playerData";


const DUMMY_DATA = [
    { ...PlayerDataDefObj, id: 'P1'},
    { ...PlayerDataDefObj, id: 'P2'},
]
const DUMMY_NAMES = ["Player A", "Player B"];

interface EditPlayersState {
    playerList: PlayerData[],
    playerNames: string[],
}

const initialState: EditPlayersState = {
    playerList: DUMMY_DATA,
    playerNames: DUMMY_NAMES
};

export const editPlayersSlice = createSlice({
    name: "editPlayers",
    initialState,
    reducers: {
        // addPlayer: (state, { payload }: PayloadAction<PlayerData>) => {
        //     state.playerList = state.playerList.concat([payload]);
        // },
        removePlayer: (state, { payload }: PayloadAction<string>) => {
            state.playerList = state.playerList.filter(player => {
                return player.id !== payload;
            });
        },
        addPlayerName: (state, { payload }: PayloadAction<string>) => {
            state.playerNames = state.playerNames.concat([payload]);
        },
        removePlayerName: (state, { payload }: PayloadAction<string>) => {
            state.playerNames = state.playerNames.filter(player => {
                return player !== payload;
            });
        },
        swapPlayers: (state) => {
            state.playerList = state.playerList.reverse();
        },
        resetPlayers: (state) => {
            state.playerList = DUMMY_DATA;
        },
        increaseScore: (state, { payload }: PayloadAction<string>) => {
            const id = payload;
            const selectedPlayer: PlayerData = state.playerList.find(player => player.id === id) as PlayerData;
            if (selectedPlayer.score < 10) {
                selectedPlayer.score++;
            }
        },
        decreaseScore: (state, { payload }: PayloadAction<string>) => {
            const id = payload;
            const selectedPlayer: PlayerData = state.playerList.find(player => player.id === id) as PlayerData;
            if (selectedPlayer.score > 0) {
                selectedPlayer.score--;
            }
        }
    }
});

export const editPlayerActions = editPlayersSlice.actions;

export default editPlayersSlice.reducer;