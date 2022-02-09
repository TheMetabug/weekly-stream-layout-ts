interface PlayerData {
    type: string;
    id: string;
    name: string;
    score: number;
}

export const PlayerDataDefObj: PlayerData = { 
    type: 'PlayerData',
    id: '',
    name: '',
    score: 0,
}

export default PlayerData;