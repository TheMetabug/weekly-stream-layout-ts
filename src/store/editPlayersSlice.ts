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
        fetchData: (state): any => {  
            const overlayData = localStorage.getItem("overlayData");

            // Split and parse stringified data from JSON
            if (overlayData != null) {
                const parsedData = JSON.parse(overlayData);
                const playerData = parsedData.playerData;
                
                const player1 = playerData[0];
                const player2 = playerData[1];
                const curPlayer1 = state.playerList[0];
                const curPlayer2 = state.playerList[1];

                curPlayer1.name = player1.name;
                curPlayer1.score = player1.score;
                curPlayer2.name = player2.name;
                curPlayer2.score = player2.score;
            }        
        },
        getData: (state): any => {
            let playerData = [];
            for (let index = 0; index < state.playerList.length; index++) {
                const element = state.playerList[index];
                playerData.push({
                    name: element.name.toString(),
                    id: element.id.toString(),
                    score: element.score.toString(),
                })      
            }
            return playerData;
        },
        removePlayer: (state, { payload }: PayloadAction<string>) => {
            state.playerList = state.playerList.filter(player => {
                return player.id !== payload;
            });
        },
        changePlayerName: (state, { payload }: PayloadAction<{name: string, id: string}>) => {      
            const id = payload.id;
            const selectedPlayer: PlayerData = state.playerList.find(player => player.id === id) as PlayerData;
            if (selectedPlayer)
                selectedPlayer.name = payload.name;
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