class PlayerData {
    id: string;
    name: string;
    score: number;
    slot: number;

    constructor(slot: number, id: string = "") {
        this.id = id;
        this.name = 'Player';
        this.score = 0;
        this.slot = 0;
    }
}

export default PlayerData;